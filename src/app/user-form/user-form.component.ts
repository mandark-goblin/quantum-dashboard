import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'f_name': '',
      'l_name': '',
      'email': '',
      'phone': ''
    });

    this.myForm.valueChanges.subscribe(console.log);

  }

}
