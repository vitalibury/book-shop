import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { BookService } from './services/book/book.service';
import { CartService } from './services/cart/cart.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { AboutComponent } from './components/about/about/about.component';
import { ConfigOptionsService } from './services/config-options/config-options.service';
import { GeneratorService } from './services/generator/generator.service';
import { CONSTANTS_SERVICE } from './services/constants/constants.service';

@NgModule({
    declarations: [AppComponent, BookComponent, CartComponent, CartItemComponent, AboutComponent],
    imports: [BrowserModule],
    providers: [
        BookService,
        CartService,
        ConfigOptionsService,
        {
            provide: LocalStorageService,
            useClass: LocalStorageService,
        },
        {
            provide: GeneratorService,
            useFactory: GeneratorService,
        },
        {
            provide: CONSTANTS_SERVICE,
            useValue: {
                App: 'TaskManager',
                Ver: '1.0',
            },
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
