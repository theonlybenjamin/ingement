import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs';

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
    this.userForm.valueChanges.pipe(
      map(cambiosDelFormulario => cambiosDelFormulario.name)
    ).subscribe(cambiosDelFormulario => {
      console.log(cambiosDelFormulario);
    })
  }
}
