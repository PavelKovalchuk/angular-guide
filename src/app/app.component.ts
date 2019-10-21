import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.signupForm = new FormGroup({
      "userData": new FormGroup({
        "username": new FormControl(null, Validators.required),
        "email": new FormControl(null, [Validators.required, Validators.email]),
      }),
      "gender": new FormControl("male"),
      "hobbies": new FormArray([]),
    });

  }

  onSubmit() {
    console.log("form", this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

}
