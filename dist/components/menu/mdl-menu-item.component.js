import { Component, Input, ElementRef, forwardRef, Renderer2, Inject, ViewEncapsulation } from '@angular/core';
import { MdlMenuComponent } from './mdl-menu.component';
import { toBoolean } from '../common/boolean-property';
import { callNative } from '../common/native-support';
var MdlMenuItemComponent = /** @class */ (function () {
    // forwardRef is needed because of he circular dependency menu queries menuitems; menuitem needs the parent
    function MdlMenuItemComponent(elementRef, renderer, mdlMenu) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlMenu = mdlMenu;
        this._disabled = false;
        this.element = elementRef.nativeElement;
    }
    Object.defineProperty(MdlMenuItemComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    MdlMenuItemComponent.prototype.onClick = function ($event) {
        $event.stopPropagation();
        if (this.disabled) {
            this.mdlMenu.hide();
            return;
        }
        this.mdlMenu.hideOnItemClicked();
    };
    // we need to register a touchstart at the window to get informed if the user taps outside the menu.
    // But if we register a touchstart event - safari will no longer convert touch events to click events.
    // So we need to convert touch to click and the user still needs to register a (click) listener to be
    // informed if the menu item has clicked.
    MdlMenuItemComponent.prototype.onTouch = function ($event) {
        // ensure that this event is totally consumed
        $event.stopPropagation();
        $event.preventDefault();
        var event = new MouseEvent('click', { bubbles: true });
        callNative(this.element, 'dispatchEvent', event);
    };
    MdlMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-menu-item',
                    host: {
                        '[class.mdl-menu__item]': 'true',
                        'tabindex': '-1',
                        '(click)': 'onClick($event)',
                        '(touchstart)': 'onTouch($event)'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlMenuItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MdlMenuComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return MdlMenuComponent; }),] }] }
    ]; };
    MdlMenuItemComponent.propDecorators = {
        disabled: [{ type: Input }]
    };
    return MdlMenuItemComponent;
}());
export { MdlMenuItemComponent };
//# sourceMappingURL=mdl-menu-item.component.js.map