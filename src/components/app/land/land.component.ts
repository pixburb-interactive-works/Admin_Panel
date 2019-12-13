import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  LaunchLogin() {
    this.router.navigate(['/login']).then();
  }

}
