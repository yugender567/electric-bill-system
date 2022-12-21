import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Consumer } from '../consumer';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  consumer = new Consumer();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) {}

  ngOnInit() {}

  registerUser() {
    this.consumer.planType.planName = '';
    this.consumer.planType.price = 0;
    console.log(this.consumer);
    this._service.registerUserFromRemote(this.consumer).subscribe(
      (data) => {
        console.log('response recieved');
        this.msg = 'Registration Successfull';
        this._router.navigate(['/login']);
        // this._router.navigate(['/loginsuccess']);
      },
      (error) => {
        console.log('exception occured');
        console.log(error);
        this.msg = error.error;
      }
    );
  }

  // repeatPass: string = 'none';
  // ngOnInit(): void {}
  // registerForm = new FormGroup({
  //   firstname: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-zA-Z].*'),
  //   ]),
  //   city: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-zA-Z].*'),
  //   ]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   area: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[a-zA-Z].*'),
  //   ]),
  //   plan: new FormControl('', [Validators.required]),
  //   pwd: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(6),
  //     Validators.max(15),
  //   ]),
  //   rpwd: new FormControl(''),
  // });
  // // consumer: undefined | Consumer = new Consumer();
  // // consumer.setvalues(this.registerForm.value.firstname,
  // //   this.registerForm.value.email,
  // //   this.registerForm.value.area,
  // //   this.registerForm.value.city,
  // //   this.registerForm.value.plan,
  // //   this.registerForm.value.password
  // //   )
  // consumer = new Consumer();
  // msg = '';
  // // rate: Rate = new Rate(this.registerForm.value.plan, null, null);
  // // user = new User(this.registerForm.value.firstname,);
  // constructor(private _service: RegistrationService, private _router: Router) {}
  // registerSubmited() {
  //   this._service.registerUserFromRemote(this.consumer).subscribe(
  //     (data) => {
  //       console.log('respone recieved');
  //       this._router.navigate(['/login']);
  //     },
  //     (error) => {
  //       console.log('exception occured');
  //       this.msg = error.error;
  //     }
  //   );
  //   if (this.Pwd.value == this.Rpwd.value) {
  //     console.log('Submitted');
  //     this.repeatPass = 'none';
  //   } else {
  //     this.repeatPass = 'inline';
  //   }
  // }
  // get FirstName(): FormControl {
  //   return this.registerForm.get('firstname') as FormControl;
  // }
  // get City(): FormControl {
  //   return this.registerForm.get('city') as FormControl;
  // }
  // get Email(): FormControl {
  //   return this.registerForm.get('email') as FormControl;
  // }
  // get Area(): FormControl {
  //   return this.registerForm.get('area') as FormControl;
  // }
  // get Plan(): FormControl {
  //   return this.registerForm.get('plan') as FormControl;
  // }
  // get Pwd(): FormControl {
  //   return this.registerForm.get('pwd') as FormControl;
  // }
  // get Rpwd(): FormControl {
  //   return this.registerForm.get('rpwd') as FormControl;
  // }
}
