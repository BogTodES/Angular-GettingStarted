import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'titlu dinamic';
    itemList: any[] = [
        {
            "id": 1,
            "name": "item1",
            "available": true,
            "price": 23.50,
            "rating": 5
        }, 
        {
            "id": 2,
            "name": "item2",
            "available": true,
            "price": 14.30,
            "rating": 3
        }, 
        {
            "id": 3,
            "name": "item3",
            "available": false,
            "price": 53,
            "rating": 4
        }
    ]; 
}