import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
// import { CookieService } from 'ngx-cookie-service';
import { from, Observable, throwError } from "rxjs";
import { map, switchMap, filter, take } from "rxjs/operators";

@Injectable()
export class FirebaseTokenInterceptor implements HttpInterceptor {
    constructor(private fbAUth: AngularFireAuth) {

    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.fbAUth.currentUser

        return this.getToken$().pipe(
            switchMap(res => {
                console.log("USER INFO: " + JSON.stringify(res));
                const authReq = request.clone({
                    setHeaders: {
                        'Content-Type': 'application/json',
                        'authorization': `${res.token}`
                    }
                });
                return next.handle(authReq);
            })
        )
    }

    public getToken$(): Observable<any> {
        return from(this.fbAUth.currentUser).pipe(
            filter(user => user !== null),
            switchMap(user => {
                if (user !== null) {
                    return from(user.getIdTokenResult(false));
                } else {
                    return throwError(() => new Error('No User Token'))
                }
            }));
    }
}