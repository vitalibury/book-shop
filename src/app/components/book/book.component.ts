import { Component, OnInit, Input, Output } from '@angular/core';
import { IBookModel } from 'src/app/models/book';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
    @Input() bookQuantity: number;

    @Output()
    isBookNoExist = true;

    book: IBookModel = {
        name: 'first book',
        description: 'about first book',
        price: 100,
        category: 3,
        createDate: 25,
        isAvailable: true,
    };

    constructor() {}

    ngOnInit(): void {
        this.appearBook();
    }

    onBuy() {
        console.log('buy book');
    }

    private appearBook() {
        if (this.bookQuantity) {
            this.isBookNoExist = false;
        } else {
            this.isBookNoExist = true;
        }
    }
}
