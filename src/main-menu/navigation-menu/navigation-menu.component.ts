import { Component, OnInit } from '@angular/core';

import { VerticalMenuComponent } from '../../common-ui-components/menus/vertical-menu/vertical-menu.component';
import { INavigationProcessor, NavigationProcessor, State } from '../../navigation-processor/bundle';

const mainMenuTemplate = require('./navigation-menu.component.html');

@Component({
    selector: 'tr-navigation-menu',
    template: mainMenuTemplate,
    directives: [VerticalMenuComponent],
    providers: [NavigationProcessor]
})
export class NavigationMenuComponent implements OnInit {
    private navigationProcessor: INavigationProcessor;
    public availableStates: string[];
    
    constructor() {
        this.navigationProcessor = NavigationProcessor.getInstance();
        this.availableStates = [];
    }

    ngOnInit() {
        this.availableStates = this.navigationProcessor.getAvailableStates()
            .map(state => state.name);
    }

    onNavigatonMenuSelectionChanged(state: string): void {
        this.navigationProcessor.navigate(state);
    }
}