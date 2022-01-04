import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { environment } from './../../../environments/environment';
import { FbTestServiceService } from './../../services/fb-test-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AngularFireAuth,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  async loginGoogle() {
    await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['home']);
  }

  async loginTwitter() {
    await this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    this.router.navigate(['home']);
  }

  async loginTwitch() {
    // await this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    // this.router.navigate(['home']);
  }

}
