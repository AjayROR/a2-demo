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
      id: 3, title: 'Ruby Article', body: ' this is a ruby article. lets learn.'
    });
  }

}
