import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalForageService } from 'ng2-localforage';
import { AuthService } from '../../services/auth.sevice';

import { SignIn } from '../../models/signin.model';

@Injectable()

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private localforage: LocalForageService) { }

  user: FormGroup;
  ngOnInit() {
    this.user = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required)
    });
  }

  onSubmit(user: FormGroup) {
     this.authService.onSignIn(user.controls.username.value, user.controls.password.value)
      .subscribe((res: any) => {
        var body = res.json();
        var x = { key: "access_token", value: body };
        this.localforage.setItem(x)
      });
  }

  onSignIn() {
   
  }
}
