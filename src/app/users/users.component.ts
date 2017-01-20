import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title: string;
  @Input() users: any[];

  constructor() {
    this.title = 'Users';
    this.users = this.users || [];
  }

  ngOnInit() {

  }

  refresh() {
    this.users.push({
      id: 3, name: '3333', age: 12
    });
  }

}
