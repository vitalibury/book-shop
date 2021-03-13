import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
    CartProduct: any = [];

    totalQuantity: number;

    totalSum: number;

    constructor() {}

    addBook(book, quantity) {
        if (book === undefined) return;
        const index = this.CartProduct.findIndex((item) => item.book.name === book.name);
        console.log(index);
        if (index < 0) {
            this.CartProduct.push({ book: book, quantity: quantity });
        } else {
            this.CartProduct[index].quantity += quantity;
            this.CartProduct[index] = { ...this.CartProduct[index] };
        }
        this.updateCartData();
    }

    removeBook(index) {
        this.CartProduct.splice(index, 1);
    }

    increaseQuantity(item) {
        this.CartProduct[item].quantity++;
        this.CartProduct[item] = { ...this.CartProduct[item] };
        this.updateCartData();
    }

    decreaseQuantity(item) {
        const quantity = this.CartProduct[item].quantity;
        if (quantity > 1) {
            this.CartProduct[item].quantity--;
            this.CartProduct[item] = { ...this.CartProduct[item] };
        }
        this.updateCartData();
    }

    removeAllBook() {
        this.CartProduct = [];
    }

    updateCartData() {
        this.totalQuantity = this.CartProduct.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
        this.totalSum = this.CartProduct.reduce((totalSum, item) => totalSum + item.quantity * item.book.price, 0);
        console.log(this.totalQuantity, this.totalSum);
    }
}
