import { Component, Input, Output, EventEmitter } from '@angular/core';

const verticalMenuTemplate = require('./vertical-menu.component.html');

@Component({
    selector: 'tr-vertical-menu',
    template: verticalMenuTemplate,
})
export class VerticalMenuComponent {
    private selectedIndex: number;
    @Input() options: string[];
    @Output() selectionChanged = new EventEmitter();

    constructor() {
        this.selectedIndex = 0;
    }

    onOptionSelected(optionIndex: number) {
        this.selectedIndex = optionIndex;
        this.selectionChanged.emit(this.options[this.selectedIndex]);
    }
}