import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  currentUser?: any;
  constructor(private fbAUth: AngularFireAuth,
    private router: Router) {

    fbAUth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }


  async signOut() {
    console.log("SIGNOUT");
    await this.fbAUth.signOut();
    this.router.navigate(['login']);
  }

}
