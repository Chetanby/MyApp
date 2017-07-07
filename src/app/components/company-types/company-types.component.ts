import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { companyList } from './companylist'

@Component({
  selector: 'app-company-types',
  templateUrl: './company-types.component.html',
  styleUrls: ['./company-types.component.css']
})

export class CompanyTypesComponent implements OnInit {

  companytype:FormGroup;
  companyTypeList = [];
  constructor() { }

  ngOnInit() {
      this.companytype = new FormGroup({
         name: new FormControl('',[Validators.required]),
      })
  }

  onSubmit(){
    var c
    this.companyTypeList.push({name123: this.companytype.controls.name.value});
    console.log(this.companyTypeList);
  }

}


export interface list {
   name
  
}