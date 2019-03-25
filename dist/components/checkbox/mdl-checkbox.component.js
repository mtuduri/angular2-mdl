import { Component, ElementRef, EventEmitter, Renderer2, forwardRef, NgModule, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { toBoolean } from '../common/boolean-property';
import { noop } from '../common/noop';
var IS_FOCUSED = 'is-focused';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MdlCheckboxComponent; }),
    multi: true
};
var MdlCheckboxComponent = /** @class */ (function () {
    function MdlCheckboxComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._disabled = false;
        this.tabindex = null;
        this.change = new EventEmitter();
        this.value_ = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlCheckboxComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlCheckboxComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.onChangeCallback(v);
            this.change.emit(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlCheckboxComponent.prototype.writeValue = function (value) {
        this.value_ = value;
    };
    MdlCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlCheckboxComponent.prototype.onFocus = function () {
        this.renderer.addClass(this.el, IS_FOCUSED);
    };
    MdlCheckboxComponent.prototype.onBlur = function () {
        this.renderer.removeClass(this.el, IS_FOCUSED);
        this.onTouchedCallback();
    };
    MdlCheckboxComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.value = !this.value;
    };
    MdlCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-checkbox',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    host: {
                        '(click)': 'onClick()',
                        '[class.mdl-checkbox]': 'true',
                        '[class.is-upgraded]': 'true',
                        '[class.is-checked]': 'value',
                        '[class.is-disabled]': 'disabled'
                    },
                    template: "\n  <input type=\"checkbox\" class=\"mdl-checkbox__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [attr.tabindex]=\"tabindex\"\n    [ngModel]=\"value\">\n  <span class=\"mdl-checkbox__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-checkbox__focus-helper\"></span>\n  <span class=\"mdl-checkbox__box-outline\">\n    <span class=\"mdl-checkbox__tick-outline\"></span>\n  </span>\n  ",
                    inputs: ['value'],
                    outputs: ['change'],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MdlCheckboxComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlCheckboxComponent.propDecorators = {
        disabled: [{ type: Input }],
        tabindex: [{ type: Input }]
    };
    return MdlCheckboxComponent;
}());
export { MdlCheckboxComponent };
var MDL_CHECKBOX_DIRECTIVES = [MdlCheckboxComponent];
var MdlCheckboxModule = /** @class */ (function () {
    function MdlCheckboxModule() {
    }
    MdlCheckboxModule.forRoot = function () {
        return {
            ngModule: MdlCheckboxModule,
            providers: []
        };
    };
    MdlCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    exports: MDL_CHECKBOX_DIRECTIVES,
                    declarations: MDL_CHECKBOX_DIRECTIVES,
                },] },
    ];
    return MdlCheckboxModule;
}());
export { MdlCheckboxModule };
//# sourceMappingURL=mdl-checkbox.component.js.map