import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  public userForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor() {
    this.userForm.valueChanges.subscribe(cambiosDelFormulario => console.log(cambiosDelFormulario))
  }
}
