import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  repeatPass: string = 'none';
  ngOnInit(): void {}
  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    area: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]),
    plan: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.max(15),
    ]),
    rpwd: new FormControl(''),
  });

  registerSubmited() {
    if (this.Pwd.value == this.Rpwd.value) {
      console.log('Submitted');
      this.repeatPass = 'none';
    } else {
      this.repeatPass = 'inline';
    }
  }

  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as FormControl;
  }

  get City(): FormControl {
    return this.registerForm.get('city') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get Area(): FormControl {
    return this.registerForm.get('area') as FormControl;
  }

  get Plan(): FormControl {
    return this.registerForm.get('plan') as FormControl;
  }

  get Pwd(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }

  get Rpwd(): FormControl {
    return this.registerForm.get('rpwd') as FormControl;
  }
}
