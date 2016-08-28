import { Component, OnInit } from '@angular/core';

import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

const mainMenuTemplate = require('./main-menu.component.html');
const mainMenuStyles = require('./main-menu.component.css');

@Component({
    selector: 'tr-main-menu',
    template: mainMenuTemplate,
    styles: [mainMenuStyles],
    directives: [NavigationMenuComponent]
})
export class MainMenuComponent {}