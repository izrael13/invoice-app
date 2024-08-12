import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total.component.html'
})
export class TotalComponent {

  @Input() total!:number;
  
}
