import { AfterContentInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBookModel } from 'src/app/models/book';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements AfterContentInit {
    @Input() cartItem: any;

    constructor() {}

    book: IBookModel;

    ngAfterContentInit(): void {
        this.book = this.cartItem.book;
    }
}
