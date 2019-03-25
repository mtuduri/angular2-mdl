import { Component, forwardRef, Input, Renderer2, ElementRef, ViewChild, NgModule, Optional, Inject, EventEmitter, Output, ViewEncapsulation, InjectionToken } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../common/boolean-property';
import { toNumber } from '../common/number.property';
import { MdlButtonModule } from '../button/mdl-button.component';
import { MdlIconModule } from '../icon/mdl-icon.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { noop } from '../common/noop';
import { callNative } from '../common/native-support';
export var DISABLE_NATIVE_VALIDITY_CHECKING = new InjectionToken('disableNativeValidityChecking');
var nextId = 0;
var IS_FOCUSED = 'is-focused';
var IS_DISABLED = 'is-disabled';
var IS_INVALID = 'is-invalid';
var IS_DIRTY = 'is-dirty';
var MdlTextFieldComponent = /** @class */ (function () {
    function MdlTextFieldComponent(renderer, elmRef, nativeCheckGlobalDisabled) {
        this.renderer = renderer;
        this.elmRef = elmRef;
        this.nativeCheckGlobalDisabled = nativeCheckGlobalDisabled;
        this.blurEmitter = new EventEmitter();
        this.focusEmitter = new EventEmitter();
        this.keyupEmitter = new EventEmitter();
        this.type = 'text';
        this.id = "mdl-textfield-" + nextId++;
        this._disabled = false;
        this._readonly = false;
        this._required = false;
        this._autofocus = false;
        this._isFloatingLabel = false;
        this._rows = null;
        this._maxrows = -1;
        this.tabindex = null;
        this.maxlength = null;
        // @experimental
        this._disableNativeValidityChecking = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this.el = elmRef.nativeElement;
    }
    Object.defineProperty(MdlTextFieldComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = this.type === 'number' ? (v === '' ? null : parseFloat(v)) : v;
            this.onChangeCallback(this.value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MdlTextFieldComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "readonly", {
        get: function () { return this._readonly; },
        set: function (value) { this._readonly = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "autofocus", {
        get: function () { return this._autofocus; },
        set: function (value) { this._autofocus = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "isFloatingLabel", {
        get: function () { return this._isFloatingLabel; },
        set: function (value) { this._isFloatingLabel = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "rows", {
        get: function () { return this._rows; },
        set: function (value) { this._rows = toNumber(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "maxrows", {
        get: function () { return this._maxrows; },
        set: function (value) { this._maxrows = toNumber(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "disableNativeValidityChecking", {
        get: function () { return this._disableNativeValidityChecking; },
        set: function (value) { this._disableNativeValidityChecking = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    MdlTextFieldComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlTextFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlTextFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlTextFieldComponent.prototype.ngOnChanges = function (changes) {
        this.checkDisabled();
    };
    MdlTextFieldComponent.prototype.ngDoCheck = function () {
        this.checkValidity();
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.setFocus = function () {
        if (!this.inputEl) {
            return;
        }
        callNative(this.inputEl.nativeElement, 'focus');
    };
    MdlTextFieldComponent.prototype.onFocus = function (event) {
        this.renderer.addClass(this.el, IS_FOCUSED);
        this.focusEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.onBlur = function (event) {
        this.renderer.removeClass(this.el, IS_FOCUSED);
        this.onTouchedCallback();
        this.blurEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.onKeyup = function (event) {
        this.keyupEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.checkDisabled = function () {
        if (this.disabled) {
            this.renderer.addClass(this.el, IS_DISABLED);
        }
        else {
            this.renderer.removeClass(this.el, IS_DISABLED);
        }
    };
    MdlTextFieldComponent.prototype.checkValidity = function () {
        // check the global setting - if globally disabled do no check
        if (this.nativeCheckGlobalDisabled === true) {
            return;
        }
        // check local setting - if locally disabled do no check
        if (this.disableNativeValidityChecking) {
            return;
        }
        if (this.inputEl && this.inputEl.nativeElement.validity) {
            if (!this.inputEl.nativeElement.validity.valid) {
                this.renderer.addClass(this.el, IS_INVALID);
            }
            else {
                this.renderer.removeClass(this.el, IS_INVALID);
            }
        }
    };
    MdlTextFieldComponent.prototype.checkDirty = function () {
        var dirty = this.inputEl && this.inputEl.nativeElement.value && this.inputEl.nativeElement.value.length > 0;
        if (dirty) {
            this.renderer.addClass(this.el, IS_DIRTY);
        }
        else {
            this.renderer.removeClass(this.el, IS_DIRTY);
        }
    };
    MdlTextFieldComponent.prototype.keydownTextarea = function ($event) {
        var currentRowCount = this.inputEl.nativeElement.value.split('\n').length;
        if ($event.keyCode === 13) {
            if (currentRowCount >= this.maxrows && this.maxrows !== -1) {
                $event.preventDefault();
            }
        }
    };
    // hm only for test purposes to simulate a change to the input field that will change the
    // model value.
    MdlTextFieldComponent.prototype.triggerChange = function (event) {
        this.value = event.target.value;
        this.onTouchedCallback();
    };
    MdlTextFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-textfield',
                    host: {
                        '[class.mdl-textfield]': 'true',
                        '[class.is-upgraded]': 'true',
                        '[class.mdl-textfield--expandable]': 'icon',
                        '[class.mdl-textfield--floating-label]': 'isFloatingLabel',
                        '[class.has-placeholder]': 'placeholder'
                    },
                    template: "\n   <div *ngIf=\"!icon\">\n     <textarea\n        *ngIf=\"rows\"\n        #input\n        [rows]=\"rows\"\n        class=\"mdl-textfield__input\"\n        type=\"text\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        (keydown)=\"keydownTextarea($event)\"\n        (keyup)=\"onKeyup($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [autofocus]=\"autofocus\"\n        [readonly]=\"readonly\"\n        [maxlength]=\"maxlength\"\n        ></textarea>\n     <input\n        *ngIf=\"!rows\"\n        #input\n        class=\"mdl-textfield__input\"\n        [type]=\"type\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [pattern]=\"pattern ? pattern : '.*'\"\n        [attr.min]=\"min\"\n        [attr.max]=\"max\"\n        [attr.step]=\"step\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        [autocomplete]=\"autocomplete ? autocomplete : ''\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        (keyup)=\"onKeyup($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [autofocus]=\"autofocus\"\n        [readonly]=\"readonly\"\n        [attr.tabindex]=\"tabindex\"\n        [maxlength]=\"maxlength\"\n        >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n   </div>\n   <div *ngIf=\"icon\">\n      <button mdl-button mdl-button-type=\"icon\" (click)=\"setFocus()\">\n         <mdl-icon>{{icon}}</mdl-icon>\n      </button>\n      <div class=\"mdl-textfield__expandable-holder\">\n       <input\n          #input\n          class=\"mdl-textfield__input\"\n          [type]=\"type\"\n          [attr.name]=\"name\"\n          [id]=\"id\"\n          [pattern]=\"pattern ? pattern : '.*'\"\n          [attr.min]=\"min\"\n          [attr.max]=\"max\"\n          [attr.step]=\"step\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          [autocomplete]=\"autocomplete ? autocomplete : ''\"\n          (focus)=\"onFocus($event)\"\n          (blur)=\"onBlur($event)\"\n          (keyup)=\"onKeyup($event)\"\n          [(ngModel)]=\"value\"\n          [disabled]=\"disabled\"\n          [required]=\"required\"\n          [autofocus]=\"autofocus\"\n          [readonly]=\"readonly\"\n          [attr.tabindex]=\"tabindex\"\n          [maxlength]=\"maxlength\"\n         >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n      </div>\n   </div>\n   ",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MdlTextFieldComponent; }),
                            multi: true
                        }],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlTextFieldComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: Boolean, decorators: [{ type: Optional }, { type: Inject, args: [DISABLE_NATIVE_VALIDITY_CHECKING,] }] }
    ]; };
    MdlTextFieldComponent.propDecorators = {
        blurEmitter: [{ type: Output, args: ['blur',] }],
        focusEmitter: [{ type: Output, args: ['focus',] }],
        keyupEmitter: [{ type: Output, args: ['keyup',] }],
        inputEl: [{ type: ViewChild, args: ['input',] }],
        value: [{ type: Input }],
        type: [{ type: Input }],
        label: [{ type: Input }],
        pattern: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }],
        name: [{ type: Input }],
        id: [{ type: Input }],
        errorMessage: [{ type: Input, args: ['error-msg',] }],
        disabled: [{ type: Input }],
        readonly: [{ type: Input }],
        required: [{ type: Input }],
        autofocus: [{ type: Input }],
        isFloatingLabel: [{ type: Input, args: ['floating-label',] }],
        placeholder: [{ type: Input }],
        autocomplete: [{ type: Input }],
        rows: [{ type: Input }],
        maxrows: [{ type: Input }],
        icon: [{ type: Input }],
        tabindex: [{ type: Input }],
        maxlength: [{ type: Input }],
        disableNativeValidityChecking: [{ type: Input }]
    };
    return MdlTextFieldComponent;
}());
export { MdlTextFieldComponent };
var MdlTextFieldModule = /** @class */ (function () {
    function MdlTextFieldModule() {
    }
    MdlTextFieldModule.forRoot = function () {
        return {
            ngModule: MdlTextFieldModule,
            providers: []
        };
    };
    MdlTextFieldModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MdlIconModule, MdlButtonModule, FormsModule, CommonModule],
                    exports: [MdlTextFieldComponent],
                    declarations: [MdlTextFieldComponent],
                },] },
    ];
    return MdlTextFieldModule;
}());
export { MdlTextFieldModule };
//# sourceMappingURL=mdl-textfield.component.js.map