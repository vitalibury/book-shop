import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: false,
})
export class OrderByPipe implements PipeTransform {
    transform(value: any, fieldName: string, reverse?: boolean): any {
        let array = value;
        if (fieldName === 'price') {
            array.sort(function (a: any, b: any) {
                return a.book.price - b.book.price;
            });
            this.reverseOrder(array, reverse);
            return array;
        } else if (fieldName === 'quantity') {
            array.sort(function (a: any, b: any) {
                return a.quantity - b.quantity;
            });
            this.reverseOrder(array, reverse);
            return array;
        } else if (fieldName === 'title') {
            array.sort(function (a: any, b: any) {
                const titleA = a.book.name;
                const titleB = b.book.name;
                if (titleA < titleB) return -1;
                if (titleA > titleB) return 1;
                return 0;
            });
            this.reverseOrder(array, reverse);
            return array;
        }
    }

    reverseOrder(array: any, flag: boolean) {
        if (flag) {
            return array.reverse();
        }
    }
}
