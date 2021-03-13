import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from 'src/app/components/main/main.component';
import { AboutComponent } from 'src/app/components/about/about/about.component';
import { BooksModule } from '../books/books.module';
import { CartModule } from '../cart/cart.module';
import { SharedModule } from '../shared/shared.module';
import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ConfigOptionsService } from 'src/app/services/config-options/config-options.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { GeneratorService } from 'src/app/services/generator/generator.service';
import { CONSTANTS_SERVICE } from 'src/app/services/constants/constants.service';

@NgModule({
    declarations: [MainComponent, AboutComponent],
    imports: [CommonModule, BooksModule, CartModule, SharedModule],
    exports: [MainComponent],
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
})
export class CoreModule {}
