import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
  }

  getUserName() {
    return this.userName;
  }

  clearUserName() {
    console.log('Clear Username');
    this.userName = '';
  }

  isValidUsername() {
    const isValid = this.userName !== null && this.userName !== '';
    return isValid;
  }

}
