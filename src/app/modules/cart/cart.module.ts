import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from 'src/app/components/cart/cart-list.component';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { HighlightHoverDirective } from 'src/app/shared/directives/highlight-hover/highlight-hover.directive';

@NgModule({
    declarations: [CartListComponent, CartItemComponent, HighlightHoverDirective],
    imports: [CommonModule],
    exports: [CartListComponent, HighlightHoverDirective],
})
export class CartModule {}
