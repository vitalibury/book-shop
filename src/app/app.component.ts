import { AfterViewInit, OnInit } from '@angular/core';
import { Component, ElementRef, Output, ViewChild } from '@angular/core';
// import { BookService } from './services/book/book.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('appTitle') appTitle: ElementRef;

    title = 'Book shop';

    // books;

    // private _bookService;

    currentBook;

    // constructor(BookService: BookService) {
    //   this._bookService = BookService;
    // }

    // ngOnInit() {
    //   this.books = this._bookService.getAllBooks();
    // }

    ngAfterViewInit(): void {
        this.appTitle.nativeElement.textContent = this.title;
    }

    onWheel() {
        console.log('start wheel');
    }

    defineBook(data: any) {
        this.currentBook = { ...data };
    }
}
