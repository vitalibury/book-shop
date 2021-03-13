import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IBookModel } from 'src/app/models/book';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnChanges {
    @Input() currentBook: any;

    cartItems: any = [];

    totalQuantity: number;

    totalSum: number;

    isEmpty = true;

    constructor(private _cartService: CartService) {}

    // ngOnInit() {
    // }

    ngOnChanges(): void {
        this.addBook(this.currentBook);
        this.cartItems = this._cartService.CartProduct;
        this.totalQuantity = this._cartService.totalQuantity;
        this.totalSum = this._cartService.totalSum;
        console.log(this.cartItems);
    }

    addBook(book) {
        this._cartService.addBook(book, 1);
    }

    removeBook(book) {
        this._cartService.removeBook(book);
    }

    increase(i) {
        this._cartService.increaseQuantity(i);
    }

    decrease(i) {
        this._cartService.decreaseQuantity(i);
    }
}
