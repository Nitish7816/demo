import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'abc',
  templateUrl: './abc.component.html'
})
export class AbcComponent {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      'name': ['', Validators.required],
    });
  }
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name}`);
    }
  }
  someMethod(){
    console.log(this.userForm);
  }
}
