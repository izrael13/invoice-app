import { Invoice } from "../models/invoice";

export const InvoiceData:Invoice = {
    id:1,
    name:'Componentes de PC',
    client: {
        name:'Israel',
        lastname:'Duran',
        address:{
            country: 'USA',
            city: 'Los angenes',
            street:'One Streer',
            number: 15
        }
    },
    company:{
        name:'New Age',
        fiscalnumber:1231231,
    },
    items:[{
        id:1,
        product:'Cpu Intel i9',
        price:456,
        quantity:1
    },{
        id:2,
        product:'Teclado',
        price:345,
        quantity:2
    },{
        id:3,
        product:'Monitor',
        price:4332,
        quantity:2
    }],
    total:0
}