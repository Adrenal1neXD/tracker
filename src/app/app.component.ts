import { Component } from '@angular/core';

import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
    selector: 'tracker-app',
    template: require('./app.component.html'),
    directives: [MainMenuComponent],
})
export class AppComponent {}