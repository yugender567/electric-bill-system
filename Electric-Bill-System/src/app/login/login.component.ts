import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { throwError } from 'rxjs';
import { Route, Router } from '@angular/router';
import { Consumer } from '../consumer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  consumer = new Consumer();
  //injected service
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) {}
  ngOnInit() {}
  loginUser() {
    this._service.loginUserFromRemote(this.consumer).subscribe(
      (data) => {
        console.log('response recieved');
        this._router.navigate(['/consumerdashboard']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Bad credentails,please enter valid emailId and password';
      }
    );
  }
  gotoregistration() {
    this._router.navigate(['/registration']);
  }
}
