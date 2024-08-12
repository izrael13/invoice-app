import { Injectable } from '@angular/core';
import { InvoiceData } from '../data/invoice-data.data';
import { Invoice } from '../models/invoice';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = InvoiceData;

  constructor() { }

  getInvoice():Invoice{
    const total =this.calculateTotal();
    return {... this.invoice, total:total};
  }

  remove(id:number):Invoice{
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return {... this.invoice, total};

  }

  save(item:Item):Invoice{
    this.invoice.items = [...this.invoice.items,item];
    const total = this.calculateTotal();
    return {...this.invoice,total};
  }
  calculateTotal(){
    /*let total = 0;
    this.getInvoice().items.forEach(item =>{
      total += item.total();
    });

    return total;*/
   return this.invoice.items.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
  }

}
