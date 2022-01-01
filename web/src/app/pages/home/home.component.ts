import { Component, OnInit } from '@angular/core';
import { FbTestServiceService } from 'src/app/services/fb-test-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user$ = this.fbtest.getUser();
  constructor(private fbtest: FbTestServiceService) { }

  ngOnInit(): void {
  }

}
