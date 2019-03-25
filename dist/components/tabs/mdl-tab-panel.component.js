import { Component, Input, ContentChild, ViewEncapsulation } from '@angular/core';
import { MdlTabPanelTitleComponent } from './mdl-tab-panel-title.component';
var MdlTabPanelContent = /** @class */ (function () {
    function MdlTabPanelContent() {
    }
    MdlTabPanelContent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-tab-panel-content',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    return MdlTabPanelContent;
}());
export { MdlTabPanelContent };
var MdlTabPanelComponent = /** @class */ (function () {
    function MdlTabPanelComponent() {
        this.isActive = false;
    }
    MdlTabPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-tab-panel',
                    host: {
                        '[class.mdl-tabs__panel]': 'true',
                        '[class.is-active]': 'isActive'
                    },
                    template: "\n   <ng-content *ngIf=\"titleComponent\" select=\"mdl-tab-panel-content\"></ng-content>\n   <ng-content *ngIf=\"!titleComponent\"></ng-content>\n   ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    MdlTabPanelComponent.propDecorators = {
        titleComponent: [{ type: ContentChild, args: [MdlTabPanelTitleComponent,] }],
        title: [{ type: Input, args: ['mdl-tab-panel-title',] }],
        disabled: [{ type: Input, args: ['disabled',] }]
    };
    return MdlTabPanelComponent;
}());
export { MdlTabPanelComponent };
//# sourceMappingURL=mdl-tab-panel.component.js.map