import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBookModel } from 'src/app/models/book';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, AfterViewInit {
    @ViewChild('appTitle') appTitle: ElementRef;

    currentBook: IBookModel;

    title = 'Book shop';

    constructor() {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.appTitle.nativeElement.textContent = this.title;
    }

    onWheel() {
        console.log('start wheel');
    }

    defineBook(data: IBookModel) {
        this.currentBook = { ...data };
    }
}
