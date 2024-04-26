import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SolesPipe } from '../../pipes/soles.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ TitleCasePipe, UpperCasePipe, TitleCasePipe, SolesPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
 public username= 'JORGE';
 totalAmount = 200;
}
