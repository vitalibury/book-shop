import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IBookModel } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
    @Output() bookBuy = new EventEmitter();

    books: object[];

    constructor(private _bookService: BookService) {}

    ngOnInit(): void {
        this.books = this._bookService.getAllBooks();
    }

    defineBook(data: IBookModel) {
        this.bookBuy.emit(data);
    }
}
