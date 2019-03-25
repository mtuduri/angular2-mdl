import { Component, Input, forwardRef, ViewChild, Renderer2, ElementRef, NgModule, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { toBoolean } from '../common/boolean-property';
import { noop } from '../common/noop';
import { callNative } from '../common/native-support';
var MdlSliderComponent = /** @class */ (function () {
    function MdlSliderComponent(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this._disabled = false;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MdlSliderComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlSliderComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.updateSliderUI();
            this.onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlSliderComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.updateSliderUI();
    };
    MdlSliderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlSliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlSliderComponent.prototype.updateSliderUI = function () {
        var fraction = (this.value_ - this.min) / (this.max - this.min);
        if (fraction === 0) {
            this.renderer.addClass(this.inputEl.nativeElement, 'is-lowest-value');
        }
        else {
            this.renderer.removeClass(this.inputEl.nativeElement, 'is-lowest-value');
        }
        this.renderer.setStyle(this.lowerEl.nativeElement, 'flex', '' + fraction);
        this.renderer.setStyle(this.upperEl.nativeElement, 'flex', '' + (1 - fraction));
    };
    MdlSliderComponent.prototype.onMouseUp = function (event) {
        event.target.blur();
    };
    MdlSliderComponent.prototype.onMouseDown = function (event) {
        if (event.target !== this.elRef.nativeElement) {
            return;
        }
        // Discard the original event and create a new event that
        // is on the slider element.
        event.preventDefault();
        var newEvent = new MouseEvent('mousedown', {
            relatedTarget: event.relatedTarget,
            button: event.button,
            buttons: event.buttons,
            clientX: event.clientX,
            clientY: this.inputEl.nativeElement.getBoundingClientRect().y,
            screenX: event.screenX,
            screenY: event.screenY
        });
        callNative(this.inputEl.nativeElement, 'dispatchEvent', newEvent);
    };
    MdlSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-slider',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MdlSliderComponent; }),
                            multi: true
                        }],
                    host: {
                        '[class.mdl-slider__container]': 'true',
                        '(mouseup)': 'onMouseUp($event)',
                        '(mousedown)': 'onMouseDown($event)'
                    },
                    template: "\n    <input class=\"mdl-slider is-upgraded\" \n            type=\"range\" \n            [min]=\"min\" \n            [max]=\"max\" \n            [step]=\"step\" \n            [(ngModel)]=\"value\" \n            [disabled]=\"disabled\"\n            tabindex=\"0\"\n            #input>\n    <div class=\"mdl-slider__background-flex\">\n      <div class=\"mdl-slider__background-lower\" #lower></div>\n      <div class=\"mdl-slider__background-upper\" #uppper></div>\n  </div>\n  ",
                    styles: [
                        "\n    :host {\n        height: 22px;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n    }\n    "
                    ],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlSliderComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    MdlSliderComponent.propDecorators = {
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }],
        lowerEl: [{ type: ViewChild, args: ['lower',] }],
        upperEl: [{ type: ViewChild, args: ['uppper',] }],
        inputEl: [{ type: ViewChild, args: ['input',] }],
        disabled: [{ type: Input }],
        value: [{ type: Input }]
    };
    return MdlSliderComponent;
}());
export { MdlSliderComponent };
var MDL_SLIDER_DIRECTIVES = [MdlSliderComponent];
var MdlSliderModule = /** @class */ (function () {
    function MdlSliderModule() {
    }
    MdlSliderModule.forRoot = function () {
        return {
            ngModule: MdlSliderModule,
            providers: []
        };
    };
    MdlSliderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, CommonModule],
                    exports: MDL_SLIDER_DIRECTIVES,
                    declarations: MDL_SLIDER_DIRECTIVES,
                },] },
    ];
    return MdlSliderModule;
}());
export { MdlSliderModule };
//# sourceMappingURL=mdl-slider.component.js.map