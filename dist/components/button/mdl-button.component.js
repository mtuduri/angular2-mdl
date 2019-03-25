var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, Input, ElementRef, Renderer2, NgModule, ViewEncapsulation } from '@angular/core';
import { MdlError } from '../common/mdl-error';
import { toBoolean } from '../common/boolean-property';
import { callNative } from '../common/native-support';
var MdlUnsupportedButtonTypeError = /** @class */ (function (_super) {
    __extends(MdlUnsupportedButtonTypeError, _super);
    function MdlUnsupportedButtonTypeError(type) {
        /* istanbul ignore next */
        return _super.call(this, "Button type \"" + type + "\" isn't supported (allowed: raised, fab, mini-fab, icon, '').") || this;
    }
    return MdlUnsupportedButtonTypeError;
}(MdlError));
export { MdlUnsupportedButtonTypeError };
var MdlUnsupportedColoredTypeError = /** @class */ (function (_super) {
    __extends(MdlUnsupportedColoredTypeError, _super);
    function MdlUnsupportedColoredTypeError(type) {
        /* istanbul ignore next */
        return _super.call(this, "Colored type \"" + type + "\" isn't supported (allowed: primary, accent, '').") || this;
    }
    return MdlUnsupportedColoredTypeError;
}(MdlError));
export { MdlUnsupportedColoredTypeError };
var MDL_BUTTON_TYPES = [
    'raised',
    'fab',
    'mini-fab',
    'icon',
    ''
];
var MDL_COLORED_TYPES = [
    'primary',
    'accent',
    ''
];
var MdlButtonComponent = /** @class */ (function () {
    function MdlButtonComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._disabled = false;
        this.element = elementRef.nativeElement;
    }
    Object.defineProperty(MdlButtonComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    MdlButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.mdlButtonType && MDL_BUTTON_TYPES.indexOf(this.mdlButtonType) === -1) {
            throw new MdlUnsupportedButtonTypeError(this.mdlButtonType);
        }
        if (this.mdlColoredType && MDL_COLORED_TYPES.indexOf(this.mdlColoredType) === -1) {
            throw new MdlUnsupportedColoredTypeError(this.mdlColoredType);
        }
    };
    MdlButtonComponent.prototype.onMouseUp = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.onMouseLeave = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.blurIt = function () {
        callNative(this.element, 'blur');
    };
    MdlButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-button, button[mdl-button], a[mdl-button]',
                    host: {
                        '[attr.disabled]': 'disabled ? "disabled" : null',
                        '(mouseup)': 'onMouseUp()',
                        '(mouseleave)': 'onMouseLeave()',
                        '[class.mdl-button]': 'true',
                        '[class.mdl-button--raised]': 'mdlButtonType == "raised"',
                        '[class.mdl-button--fab]': 'mdlButtonType == "fab" || mdlButtonType == "mini-fab"',
                        '[class.mdl-button--mini-fab]': 'mdlButtonType == "mini-fab"',
                        '[class.mdl-button--icon]': 'mdlButtonType == "icon"',
                        '[class.mdl-button--primary]': 'mdlColoredType == "primary"',
                        '[class.mdl-button--accent]': 'mdlColoredType == "accent"'
                    },
                    exportAs: 'mdlButton',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlButtonComponent.propDecorators = {
        mdlButtonType: [{ type: Input, args: ['mdl-button-type',] }],
        mdlColoredType: [{ type: Input, args: ['mdl-colored',] }],
        disabled: [{ type: Input }]
    };
    return MdlButtonComponent;
}());
export { MdlButtonComponent };
var MDL_BUTTON_DIRECTIVES = [MdlButtonComponent];
var MdlButtonModule = /** @class */ (function () {
    function MdlButtonModule() {
    }
    MdlButtonModule.forRoot = function () {
        return {
            ngModule: MdlButtonModule,
            providers: []
        };
    };
    MdlButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_BUTTON_DIRECTIVES,
                    declarations: MDL_BUTTON_DIRECTIVES,
                },] },
    ];
    return MdlButtonModule;
}());
export { MdlButtonModule };
//# sourceMappingURL=mdl-button.component.js.map