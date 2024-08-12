import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/Item';
import { CommonModule } from '@angular/common';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule, RowItemComponent],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {

  @Input() items!:Item[];

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id:number){
    this.removeEventEmitter.emit(id);
  }

}
