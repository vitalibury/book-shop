import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from 'src/app/components/book/book.component';
import { BookListComponent } from 'src/app/components/book-list/book-list.component';
import { SelectOnClickDirective } from 'src/app/shared/directives/select-on-click/select-on-click.directive';

@NgModule({
    declarations: [BookListComponent, BookComponent, SelectOnClickDirective],
    imports: [CommonModule],
    exports: [BookListComponent, SelectOnClickDirective],
})
export class BooksModule {}
