import { Component, ElementRef, Output, EventEmitter, Renderer2, forwardRef, Input, NgModule, Injectable, ViewEncapsulation, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule, FormGroupName } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { toBoolean } from '../common/boolean-property';
import { noop } from '../common/noop';
var IS_FOCUSED = 'is-focused';
// Registry for mdl-readio compnents. Is responsible to keep the
// right state of the radio buttons of a radio group. It would be
// easier if i had a mdl-radio-group component. but this would be
// a big braking change.
var MdlRadioGroupRegisty = /** @class */ (function () {
    function MdlRadioGroupRegisty() {
        this.defaultFormGroup = 'defaultFromGroup';
        this.radioComponents = [];
    }
    MdlRadioGroupRegisty.prototype.add = function (radioComponent, formGroupName) {
        this.radioComponents.push({
            radio: radioComponent,
            group: formGroupName || this.defaultFormGroup
        });
    };
    MdlRadioGroupRegisty.prototype.remove = function (radioComponent) {
        this.radioComponents = this.radioComponents.filter(function (radioComponentInArray) {
            return (radioComponentInArray.radio !== radioComponent);
        });
    };
    MdlRadioGroupRegisty.prototype.select = function (radioComponent, formGroupName) {
        // unselect every radioComponent that is not the provided radiocomponent
        // and has the same name and is in teh same group.
        var groupToTest = formGroupName || this.defaultFormGroup;
        this.radioComponents.forEach(function (component) {
            if (component.radio.name === radioComponent.name && component.group === groupToTest) {
                if (component.radio !== radioComponent) {
                    component.radio.deselect(radioComponent.value);
                }
            }
        });
    };
    MdlRadioGroupRegisty.decorators = [
        { type: Injectable },
    ];
    return MdlRadioGroupRegisty;
}());
export { MdlRadioGroupRegisty };
/*
 <mdl-radio name="group1" value="1" [(ngModel)]="radioOption">Value 1</mdl-radio>
 */
var MdlRadioComponent = /** @class */ (function () {
    function MdlRadioComponent(elementRef, renderer, radioGroupRegistry, formGroupName) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.radioGroupRegistry = radioGroupRegistry;
        this.formGroupName = formGroupName;
        this._disabled = false;
        this.tabindex = null;
        this.change = new EventEmitter();
        // the internal state - used to set the underlaying radio button state.
        this.checked = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlRadioComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    MdlRadioComponent.prototype.ngOnInit = function () {
        // we need a name and it must be the same as in the formcontrol.
        // a radio group without name is useless.
        this.checkName();
        // register the radio button - this is the only chance to unselect the
        // radio button that is no longer active - scope the radio button with it's group
        // if there is one.
        this.radioGroupRegistry.add(this, this.formGroupName);
    };
    MdlRadioComponent.prototype.ngOnDestroy = function () {
        this.radioGroupRegistry.remove(this);
    };
    MdlRadioComponent.prototype.writeValue = function (optionValue) {
        this.optionValue = optionValue;
        this.updateCheckState();
    };
    MdlRadioComponent.prototype.deselect = function (value) {
        // called from the registry. the value is the value of the selected radio button
        // e.g. the radio button get unselected if it isnÄt the selected one.
        this.writeValue(value);
    };
    MdlRadioComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        // wrap the callback, so that we can call select on the registry
        this.onChangeCallback = function () {
            fn(_this.value);
            _this.radioGroupRegistry.select(_this, _this.formGroupName);
        };
    };
    MdlRadioComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlRadioComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlRadioComponent.prototype.onFocus = function () {
        this.renderer.addClass(this.el, IS_FOCUSED);
    };
    MdlRadioComponent.prototype.onBlur = function () {
        this.renderer.removeClass(this.el, IS_FOCUSED);
    };
    MdlRadioComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.optionValue = this.value;
        this.updateCheckState();
        this.onChangeCallback();
        this.change.emit(this.optionValue);
    };
    MdlRadioComponent.prototype.updateCheckState = function () {
        this.checked = this.optionValue === this.value;
    };
    MdlRadioComponent.prototype.checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this.throwNameError();
        }
        if (!this.name && this.formControlName) {
            this.name = this.formControlName;
        }
    };
    MdlRadioComponent.prototype.throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <mdl-radio formControlName=\"food\" name=\"food\"></mdl-radio>\n    ");
    };
    MdlRadioComponent.prototype.spaceKeyPress = function (event) {
        this.checked = false; //in case of space key is pressed radio button value must remain same
    };
    MdlRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-radio',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MdlRadioComponent; }),
                            multi: true
                        }],
                    host: {
                        '(click)': 'onClick()',
                        '[class.mdl-radio]': 'true',
                        '[class.is-upgraded]': 'true',
                        '[class.is-checked]': 'checked',
                        '[class.is-disabled]': 'disabled'
                    },
                    template: "\n  <input type=\"checkbox\" class=\"mdl-radio__button\" \n    [attr.name]=\"name\"\n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    (keyup.space)=\"spaceKeyPress($event)\"\n    [disabled]=\"disabled\"\n    [attr.tabindex]=\"tabindex\"\n    [(ngModel)]=\"checked\">\n  <span class=\"mdl-radio__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-radio__outer-circle\"></span>\n  <span class=\"mdl-radio__inner-circle\"></span>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlRadioComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MdlRadioGroupRegisty },
        { type: FormGroupName, decorators: [{ type: Optional }] }
    ]; };
    MdlRadioComponent.propDecorators = {
        name: [{ type: Input }],
        formControlName: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        tabindex: [{ type: Input }],
        change: [{ type: Output }]
    };
    return MdlRadioComponent;
}());
export { MdlRadioComponent };
var MdlRadioModule = /** @class */ (function () {
    function MdlRadioModule() {
    }
    MdlRadioModule.forRoot = function () {
        return {
            ngModule: MdlRadioModule,
            providers: [MdlRadioGroupRegisty]
        };
    };
    MdlRadioModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    exports: [MdlRadioComponent],
                    declarations: [MdlRadioComponent]
                },] },
    ];
    return MdlRadioModule;
}());
export { MdlRadioModule };
//# sourceMappingURL=mdl-radio.component.js.map