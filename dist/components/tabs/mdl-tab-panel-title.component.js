import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
var MdlTabPanelTitleComponent = /** @class */ (function () {
    function MdlTabPanelTitleComponent(vcRef) {
        this.vcRef = vcRef;
    }
    MdlTabPanelTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-tab-panel-title',
                    template: "\n   <ng-content></ng-content>\n   ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlTabPanelTitleComponent.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    return MdlTabPanelTitleComponent;
}());
export { MdlTabPanelTitleComponent };
//# sourceMappingURL=mdl-tab-panel-title.component.js.map