import { AfterViewInit, OnInit } from '@angular/core';
import { Component, ElementRef, Output, ViewChild } from '@angular/core';
// import { BookService } from './services/book/book.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    // books;

    // private _bookService;

    // constructor(BookService: BookService) {
    //   this._bookService = BookService;
    // }

    // ngOnInit() {
    //   this.books = this._bookService.getAllBooks();
    // }
    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit() {}
}
