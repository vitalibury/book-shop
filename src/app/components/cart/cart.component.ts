import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { IBookModel } from 'src/app/models/book';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnChanges {
    @Input() currentBook: IBookModel;

    cartItems = [];

    isEmpty = true;

    constructor() {}

    ngOnChanges(): void {
        this.addBook();
        console.log(this.cartItems);
    }

    addBook() {
        if (this.currentBook === undefined) return;
        const ind = this.cartItems.findIndex((item) => item.book.name === this.currentBook.name);
        console.log(ind);
        if (ind < 0) {
            this.cartItems.push({ book: this.currentBook, quantity: 1 });
        } else {
            this.cartItems[ind].quantity++;
            this.cartItems[ind] = { ...this.cartItems[ind] };
        }
    }

    increase(i) {
        this.cartItems[i].quantity++;
        this.cartItems[i] = { ...this.cartItems[i] };
    }

    decrease(i) {
        const quantity = this.cartItems[i].quantity;
        if (quantity > 1) {
            this.cartItems[i].quantity--;
            this.cartItems[i] = { ...this.cartItems[i] };
        }
    }

    deleteBook(i) {
        this.cartItems.splice(i, 1);
    }
}
