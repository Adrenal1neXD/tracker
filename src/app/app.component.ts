import { Component } from '@angular/core';

import { MainMenuComponent } from '../main-menu/main-menu.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

const appTemplate = require('./app.component.html');

@Component({
    selector: 'tracker-app',
    template: appTemplate,
    directives: [NavigationBarComponent, MainMenuComponent],
})
export class AppComponent {}