import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nonAdminUsers: any;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.nonAdminUsers= [];
    this.userService.getData()
      .subscribe((data: any[]) => {
        this.nonAdminUsers = data
      });
  }

}
