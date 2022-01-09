import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FbTestServiceService } from 'src/app/services/fb-test-service.service';
import { ZokyaZonksService } from 'src/app/services/zokya-zonks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user$ = this.fbtest.getUser();
  userToo$ = this.auth.currentUser;

  constructor(private fbtest: FbTestServiceService, private auth: AngularFireAuth, private zonksService: ZokyaZonksService) { }

  ngOnInit(): void {
    //this.loadUser();
  }

  async loadUser() {
    const userdata = await this.auth.currentUser;

  }

  onAddZonks() {
    this.zonksService.addZonks().subscribe(res => {
      console.log("GOT RETURN : " + JSON.stringify(res));
    })
  }

  onGetZonks() {
    this.zonksService.getZonks().subscribe(res => {
      console.log("GOT RETURN: " + JSON.stringify(res));
    })
  }

}
