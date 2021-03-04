import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { IBookModel } from 'src/app/models/book';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
    @Input() book: IBookModel;

    @Output() bookBuy = new EventEmitter();

    color = '';

    constructor() {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}

    onBuy(data: any) {
        // console.log(data);
        this.bookBuy.emit({ ...data });
    }

    onHover($event) {
        this.color = $event.type === 'mouseover' ? 'red' : '';
    }
}
