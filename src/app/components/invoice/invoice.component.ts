import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule,InvoiceViewComponent,ClientViewComponent,
    CompanyViewComponent,ListItemsComponent,RowItemComponent,TotalComponent,FormItemComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit{

  service:InvoiceService =inject(InvoiceService);
  invoice!:Invoice;

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  removeItem(id:number){
    this.invoice = this.service.remove(id);
  }

  addItem(item:Item){
    this.invoice = this.service.save(item);
  }

}
