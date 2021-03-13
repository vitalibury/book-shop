import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';

@NgModule({
    declarations: [CartComponent, CartItemComponent],
    imports: [CommonModule],
    exports: [CartComponent],
})
export class CartModule {}
