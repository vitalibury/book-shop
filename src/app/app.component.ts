import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('appTitle') appTitle: ElementRef;

    title = 'Book shop';

    books = [
        {
            name: 'book1',
            description: 'about book1',
            price: 15,
            category: 2,
            createDate: '20.11.20',
            isAvailable: true,
        },
        {
            name: 'book2',
            description: 'about book2',
            price: 10,
            category: 1,
            createDate: '20.11.20',
            isAvailable: false,
        },
        {
            name: 'book3',
            description: 'about book3',
            price: 18,
            category: 3,
            createDate: '20.11.20',
            isAvailable: true,
        },
        {
            name: 'book4',
            description: 'about book4',
            price: 12,
            category: 3,
            createDate: '20.11.20',
            isAvailable: true,
        },
        {
            name: 'book5',
            description: 'about book5',
            price: 14,
            category: 2,
            createDate: '20.11.20',
            isAvailable: false,
        },
        {
            name: 'book6',
            description: 'about book6',
            price: 11,
            category: 2,
            createDate: '20.11.20',
            isAvailable: true,
        },
        {
            name: 'book7',
            description: 'about book7',
            price: 19,
            category: 1,
            createDate: '20.11.20',
            isAvailable: true,
        },
    ];

    currentBook;

    ngAfterViewInit(): void {
        this.appTitle.nativeElement.textContent = this.title;
    }

    onWheel() {
        console.log('start wheel');
    }

    defineBook(data: any) {
        this.currentBook = data;
    }
}
