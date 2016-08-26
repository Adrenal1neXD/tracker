import { Component } from '@angular/core';

const mainMenuTemplate = require('./main-menu.component.html');
const mainMenuStyles = require('./main-menu.component.css');
@Component({
    selector: 'tr-main-menu',
    template: mainMenuTemplate,
    styles: [mainMenuStyles]
})
export class MainMenuComponent {}