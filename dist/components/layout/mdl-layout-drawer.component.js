import { Component, ViewEncapsulation, Inject, forwardRef, Optional } from '@angular/core';
import { MdlLayoutComponent } from './mdl-layout.component';
var MdlLayoutDrawerComponent = /** @class */ (function () {
    function MdlLayoutDrawerComponent(parentLayout) {
        this.parentLayout = parentLayout;
        this.isDrawerVisible = false;
    }
    MdlLayoutDrawerComponent.prototype.isDrawerDirectChildOf = function (layout) {
        return this.parentLayout === layout;
    };
    MdlLayoutDrawerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-layout-drawer',
                    host: {
                        '[class.mdl-layout__drawer]': 'true',
                        '[class.is-visible]': 'isDrawerVisible'
                    },
                    template: "<ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlLayoutDrawerComponent.ctorParameters = function () { return [
        { type: MdlLayoutComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return MdlLayoutComponent; }),] }] }
    ]; };
    return MdlLayoutDrawerComponent;
}());
export { MdlLayoutDrawerComponent };
//# sourceMappingURL=mdl-layout-drawer.component.js.map