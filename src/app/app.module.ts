import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { SelectOnClickDirective } from './shared/directives/select-on-click/select-on-click.directive';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CoreModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
