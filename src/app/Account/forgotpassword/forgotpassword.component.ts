import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {


  constructor() { }

  user: FormGroup;
  ngOnInit() {
    this.user = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.email])
    });
  }

  onSubmit(user:FormGroup){
    console.log(user.controls.username.value);
  }
}
