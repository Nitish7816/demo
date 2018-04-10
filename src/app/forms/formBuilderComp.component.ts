import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'formBuilderComp',
  template: `
  <form [formGroup]="form" (submit)="onSave()">
    <div formGroupName="name">
      <input formControlName="first" placeholder="First"/>
      <input formControlName="last" placeholder="Last"/>
    </div>
    <input formControlName="email" placeholder="Email"/><br>
    <button>submit</button>
  </form>
    <p>Value: {{form.value | json}}</p>
  <p>Validation status: {{ form.status }}</p>
  `
})
export class FormBuilderCompComponent {
  form: FormGroup;
  constructor (private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: formBuilder.group({
        first: ['nitish', Validators.minLength(2)],
        last: 'kumar',
      }),
      email: '',
    });
  }
  onSave() {
    console.log(this.form.value);
  }
}
