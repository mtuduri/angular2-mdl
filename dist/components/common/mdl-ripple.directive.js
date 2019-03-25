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
import { Directive, Input, ElementRef, Renderer2, NgModule } from '@angular/core';
import { MaterialRipple } from './ripple.vendor';
// known bugs: https://github.com/google/material-design-lite/issues/4215
var MdlRippleDirective = /** @class */ (function () {
    function MdlRippleDirective(elementRef, renderer, cssContainerClasses) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cssContainerClasses = cssContainerClasses;
        this.RIPPLE = 'mdl-ripple';
        this.rippleActive = true;
        this.el = elementRef.nativeElement;
    }
    MdlRippleDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // remove any existing ripple container
        if (this.rippleContainer) {
            this.el.removeChild(this.rippleContainer);
            delete this.rippleContainer;
            delete this.ripple;
        }
        // if used as mdl-ripple without property binding it is an empty string
        // otherwise (e.g. [mdl-ripple] it is a boolean - may be with the default value true.
        if (this.rippleActive === '' || this.rippleActive) {
            this.rippleContainer = this.renderer.createElement('span');
            this.cssContainerClasses.forEach(function (cssClass) {
                _this.renderer.addClass(_this.rippleContainer, cssClass);
            });
            var rippleElement = this.renderer.createElement('span');
            this.renderer.addClass(rippleElement, this.RIPPLE);
            this.rippleContainer.appendChild(rippleElement);
            this.el.appendChild(this.rippleContainer);
            this.ripple = new MaterialRipple(this.renderer, this.el);
        }
    };
    return MdlRippleDirective;
}());
export { MdlRippleDirective };
var MdlButtonRippleDirective = /** @class */ (function (_super) {
    __extends(MdlButtonRippleDirective, _super);
    function MdlButtonRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-button__ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlButtonRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    MdlButtonRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-button[mdl-ripple], button[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlButtonRippleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlButtonRippleDirective.propDecorators = {
        rippleActive: [{ type: Input, args: ['mdl-ripple',] }]
    };
    return MdlButtonRippleDirective;
}(MdlRippleDirective));
export { MdlButtonRippleDirective };
var MdlCheckboxRippleDirective = /** @class */ (function (_super) {
    __extends(MdlCheckboxRippleDirective, _super);
    function MdlCheckboxRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-checkbox__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlCheckboxRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    MdlCheckboxRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-checkbox[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlCheckboxRippleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlCheckboxRippleDirective.propDecorators = {
        rippleActive: [{ type: Input, args: ['mdl-ripple',] }]
    };
    return MdlCheckboxRippleDirective;
}(MdlRippleDirective));
export { MdlCheckboxRippleDirective };
var MdlRadioRippleDirective = /** @class */ (function (_super) {
    __extends(MdlRadioRippleDirective, _super);
    function MdlRadioRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-radio__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlRadioRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    MdlRadioRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-radio[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlRadioRippleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlRadioRippleDirective.propDecorators = {
        rippleActive: [{ type: Input, args: ['mdl-ripple',] }]
    };
    return MdlRadioRippleDirective;
}(MdlRippleDirective));
export { MdlRadioRippleDirective };
var MdlIconToggleRippleDirective = /** @class */ (function (_super) {
    __extends(MdlIconToggleRippleDirective, _super);
    function MdlIconToggleRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-icon-toggle__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlIconToggleRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    MdlIconToggleRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-icon-toggle[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlIconToggleRippleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlIconToggleRippleDirective.propDecorators = {
        rippleActive: [{ type: Input, args: ['mdl-ripple',] }]
    };
    return MdlIconToggleRippleDirective;
}(MdlRippleDirective));
export { MdlIconToggleRippleDirective };
var MdlSwitchRippleDirective = /** @class */ (function (_super) {
    __extends(MdlSwitchRippleDirective, _super);
    function MdlSwitchRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-switch__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlSwitchRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    MdlSwitchRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-switch[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlSwitchRippleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlSwitchRippleDirective.propDecorators = {
        rippleActive: [{ type: Input, args: ['mdl-ripple',] }]
    };
    return MdlSwitchRippleDirective;
}(MdlRippleDirective));
export { MdlSwitchRippleDirective };
var MdlMenuItemRippleDirective = /** @class */ (function (_super) {
    __extends(MdlMenuItemRippleDirective, _super);
    function MdlMenuItemRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-menu__item--ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlMenuItemRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    MdlMenuItemRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-menu-item[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlMenuItemRippleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlMenuItemRippleDirective.propDecorators = {
        rippleActive: [{ type: Input, args: ['mdl-ripple',] }]
    };
    return MdlMenuItemRippleDirective;
}(MdlRippleDirective));
export { MdlMenuItemRippleDirective };
var MdlAnchorRippleDirective = /** @class */ (function (_super) {
    __extends(MdlAnchorRippleDirective, _super);
    function MdlAnchorRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-tabs__ripple-container', 'mdl-layout__tab-ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlAnchorRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    MdlAnchorRippleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'a[mdl-ripple],div[mdl-ripple]'
                },] },
    ];
    /** @nocollapse */
    MdlAnchorRippleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlAnchorRippleDirective.propDecorators = {
        rippleActive: [{ type: Input, args: ['mdl-ripple',] }]
    };
    return MdlAnchorRippleDirective;
}(MdlRippleDirective));
export { MdlAnchorRippleDirective };
var MDL_COMMON_DIRECTIVES = [
    MdlCheckboxRippleDirective,
    MdlButtonRippleDirective,
    MdlRadioRippleDirective,
    MdlIconToggleRippleDirective,
    MdlSwitchRippleDirective,
    MdlMenuItemRippleDirective,
    MdlAnchorRippleDirective
];
var MdlRippleModule = /** @class */ (function () {
    function MdlRippleModule() {
    }
    MdlRippleModule.forRoot = function () {
        return {
            ngModule: MdlRippleModule,
            providers: []
        };
    };
    MdlRippleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_COMMON_DIRECTIVES,
                    declarations: MDL_COMMON_DIRECTIVES,
                },] },
    ];
    return MdlRippleModule;
}());
export { MdlRippleModule };
//# sourceMappingURL=mdl-ripple.directive.js.map