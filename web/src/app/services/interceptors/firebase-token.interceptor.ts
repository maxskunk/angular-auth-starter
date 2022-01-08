import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { from, Observable, of, throwError } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";

@Injectable()
export class FirebaseTokenInterceptor implements HttpInterceptor {
    constructor(private fbAUth: AngularFireAuth) {

    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return this.getToken$().pipe(
            switchMap(res => {
                if (res === "No User")
                    return next.handle(request);
                const authReq = request.clone({
                    setHeaders: {
                        'Content-Type': 'application/json',
                        'authorization': `${res.token}`
                    }
                });
                return next.handle(authReq);
            }),
            catchError(e => {
                return throwError(() => e)
            })

        )
    }

    public getToken$(): Observable<any> {
        return from(this.fbAUth.currentUser).pipe(
            switchMap(user => {
                if (user !== null) {
                    return from(user.getIdTokenResult(false));
                } else {
                    return of("No User");
                }
            }));
    }
}