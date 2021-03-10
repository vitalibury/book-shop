import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {
    config = {
        id: '',
        login: '',
        email: '',
    };

    constructor() {}

    setConfig(settings) {
        this.config = { ...this.config, ...settings };
    }

    getConfig() {
        return this.config;
    }
}
