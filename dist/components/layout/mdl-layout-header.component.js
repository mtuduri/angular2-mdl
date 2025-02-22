import { Component, ElementRef, Renderer2, ViewEncapsulation, Inject, forwardRef } from '@angular/core';
import { MdlLayoutComponent } from './mdl-layout.component';
var MdlLayoutHeaderComponent = /** @class */ (function () {
    function MdlLayoutHeaderComponent(elementRef, renderer, mdlLayout) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlLayout = mdlLayout;
        this.isCompact = false;
        this.isAnimating = false;
        this.isSeamed = false;
        this.isRipple = true;
        this.el = elementRef.nativeElement;
    }
    MdlLayoutHeaderComponent.prototype.onTransitionEnd = function () {
        this.isAnimating = false;
    };
    MdlLayoutHeaderComponent.prototype.onClick = function () {
        if (this.isCompact) {
            this.isCompact = false;
            this.isAnimating = true;
        }
    };
    MdlLayoutHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-layout-header',
                    host: {
                        '[class.mdl-layout__header]': 'true',
                        '[class.is-casting-shadow]': 'mode==="standard" || isCompact',
                        '[class.mdl-layout__header--seamed]': 'isSeamed',
                        '[class.mdl-layout__header--waterfall]': 'mode==="waterfall"',
                        '[class.mdl-layout__header--scroll]': 'mode==="scroll"',
                        '[class.is-compact]': 'isCompact',
                        '(transitionend)': 'onTransitionEnd()',
                        '(click)': 'onClick()'
                    },
                    template: "\n     <ng-content></ng-content>\n     <div *ngIf=\"tabs?.toArray()?.length > 0\" class=\"mdl-layout__tab-bar-container\">\n         <div class=\"mdl-layout__tab-bar is-casting-shadow\">\n           <div *ngFor=\"let tab of tabs.toArray()\" \n                class=\"mdl-layout__tab\" \n                [ngClass]=\"{'is-active': tab.isActive}\"\n                (mouseover)=\"mdlLayout.onTabMouseover(tab)\" \n                (mouseout)=\"mdlLayout.onTabMouseout(tab)\">\n              <div \n                *ngIf=\"tab.titleComponent\" \n                (click)=\"mdlLayout.tabSelected(tab)\"\n                [mdl-ripple]=\"isRipple\"\n                [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n              <a *ngIf=\"!tab.titleComponent\" \n                    href=\"javascript:void(0)\"   \n                    (click)=\"mdlLayout.tabSelected(tab)\"\n                    class=\"mdl-layout__tab\" \n                    [ngClass]=\"{'is-active': tab.isActive}\"\n                    [mdl-ripple]=\"isRipple\"\n                   >{{tab.title}}</a>\n             </div>\n         </div>\n     </div>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlLayoutHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MdlLayoutComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return MdlLayoutComponent; }),] }] }
    ]; };
    return MdlLayoutHeaderComponent;
}());
export { MdlLayoutHeaderComponent };
//# sourceMappingURL=mdl-layout-header.component.js.map