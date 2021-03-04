import { AfterContentInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements AfterContentInit {
    @Input() cartItem;

    constructor() {}

    book;

    ngAfterContentInit(): void {
        this.book = this.cartItem.book;
    }
}
