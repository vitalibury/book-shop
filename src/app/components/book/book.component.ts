import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IBookModel } from 'src/app/models/book';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
    @Input() book: IBookModel;

    @Output() bookBuy = new EventEmitter();

    // book: object;

    color = '';

    constructor() {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}

    onBuy(data: IBookModel) {
        // console.log(data);
        this.bookBuy.emit(data);
    }

    onHover($event: Event) {
        this.color = $event.type === 'mouseover' ? 'red' : '';
    }
}
