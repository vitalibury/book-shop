import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from 'src/app/components/cart/cart-list.component';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { HighlightHoverDirective } from 'src/app/shared/directives/highlight-hover/highlight-hover.directive';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

@NgModule({
    declarations: [CartListComponent, CartItemComponent, HighlightHoverDirective, OrderByPipe],
    imports: [CommonModule],
    exports: [CartListComponent, HighlightHoverDirective, OrderByPipe],
})
export class CartModule {}
