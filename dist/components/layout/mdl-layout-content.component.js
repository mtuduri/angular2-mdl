import { Component, ViewEncapsulation, ElementRef, ContentChildren, QueryList } from '@angular/core';
import { MdlLayoutTabPanelComponent } from './mdl-layout-tab-panel.component';
var MdlLayoutContentComponent = /** @class */ (function () {
    function MdlLayoutContentComponent(elRef) {
        this.elRef = elRef;
        this.el = elRef.nativeElement;
    }
    MdlLayoutContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-layout-content',
                    host: {
                        '[class.mdl-layout__content]': 'true',
                    },
                    template: "<ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    /** @nocollapse */
    MdlLayoutContentComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MdlLayoutContentComponent.propDecorators = {
        tabs: [{ type: ContentChildren, args: [MdlLayoutTabPanelComponent,] }]
    };
    return MdlLayoutContentComponent;
}());
export { MdlLayoutContentComponent };
//# sourceMappingURL=mdl-layout-content.component.js.map