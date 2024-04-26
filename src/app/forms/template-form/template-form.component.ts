import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IUser {
  name: string;
}
@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {
  public user: IUser = {
    name: ''
  };
  onSubmit() {
    if (this.user.name.length > 0) {
      console.log(this.user);
    }
  }
}
