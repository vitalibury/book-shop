import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from 'src/app/components/book/book.component';

@NgModule({
    declarations: [BookComponent],
    imports: [CommonModule],
    exports: [BookComponent],
})
export class BooksModule {}
