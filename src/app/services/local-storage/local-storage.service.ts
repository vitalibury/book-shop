import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor() {}

    setItem(key, value) {
        // if object - transform to string
        localStorage.setItem(key, value);
    }

    getItem(key) {
        return localStorage.getItem(key);
    }

    removeItem(key: any) {
        localStorage.removeItem(key);
    }
}
