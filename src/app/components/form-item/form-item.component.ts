import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form-item.component.html'
})
export class FormItemComponent {

  @Output() addItemEventEmitter:EventEmitter<any> = new EventEmitter();

  private counterId:number = 4;

  item:any = {
    product:'',
    price:'',
    quantity:''
  };

  onSubmit(itemForm:NgForm):void{
    if(itemForm.valid){
      this.addItemEventEmitter.emit({id:this.counterId,...this.item});
      this.counterId++;
      this.item = {
        product:'',
        price:'',
        quantity:''
      };
  
      itemForm.reset();
      itemForm.resetForm();
    }

  }

}
