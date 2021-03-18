import { Component, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from 'src/app/services/config-options/config-options.service';
import { GeneratorService } from 'src/app/services/generator/generator.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
    constructor(
        @Optional() private _localStorage: LocalStorageService,
        @Optional() private _configOptions: ConfigOptionsService,
        @Optional() private _generator: GeneratorService,
    ) {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}
}
