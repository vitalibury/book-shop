import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
    constructor() {}

    generatorFactory(n: number) {
        const template = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        let randomStr = '';

        for (let i = 0; i < n; i++) {
            const randomDigit = Math.floor(Math.random() * 100);
            if (randomDigit < template.length) {
                randomStr += template[randomDigit];
            } else {
                const remainingIndex = randomDigit % template.length;
                randomStr += template[remainingIndex];
            }
        }
        return randomStr;
    }
}
