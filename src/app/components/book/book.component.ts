import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IBookModel } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
    // @Input() book: IBookModel;

    @Output() bookBuy = new EventEmitter();

    books: object;

    color = '';

    constructor(private _bookService: BookService, private _localStorage: LocalStorageService) {}

    ngOnInit(): void {
        this.books = this._bookService.getAllBooks();
        this._localStorage.setItem('', '');
    }

    onBuy(data: any) {
        // console.log(data);
        this.bookBuy.emit(data);
    }

    onHover($event: Event) {
        this.color = $event.type === 'mouseover' ? 'red' : '';
    }
}
