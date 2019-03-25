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
import { Component, ElementRef, Renderer2, forwardRef, NgModule, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MdlCheckboxComponent } from '../checkbox/mdl-checkbox.component';
import { CommonModule } from '@angular/common';
var MdlSwitchComponent = /** @class */ (function (_super) {
    __extends(MdlSwitchComponent, _super);
    function MdlSwitchComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    MdlSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-switch',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MdlSwitchComponent; }),
                            multi: true
                        }],
                    host: {
                        '(click)': 'onClick()',
                        '[class.mdl-switch]': 'true',
                        '[class.is-upgraded]': 'true',
                        '[class.is-checked]': 'value',
                        '[class.is-disabled]': 'disabled'
                    },
                    outputs: ['change'],
                    template: "\n    <input type=\"checkbox\" class=\"mdl-switch__input\" \n      (focus)=\"onFocus()\" \n      (blur)=\"onBlur()\"\n      [disabled]=\"disabled\"\n      [(ngModel)]=\"value\">\n    <span class=\"mdl-switch__label\"><ng-content></ng-content></span>\n    <div class=\"mdl-switch__track\"></div>\n    <div class=\"mdl-switch__thumb\"><span class=\"mdl-switch__focus-helper\"></span></div>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlSwitchComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return MdlSwitchComponent;
}(MdlCheckboxComponent));
export { MdlSwitchComponent };
var MDL_SWITCH_DIRECTIVES = [MdlSwitchComponent];
var MdlSwitchModule = /** @class */ (function () {
    function MdlSwitchModule() {
    }
    MdlSwitchModule.forRoot = function () {
        return {
            ngModule: MdlSwitchModule,
            providers: []
        };
    };
    MdlSwitchModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    exports: MDL_SWITCH_DIRECTIVES,
                    declarations: MDL_SWITCH_DIRECTIVES,
                },] },
    ];
    return MdlSwitchModule;
}());
export { MdlSwitchModule };
//# sourceMappingURL=mdl-switch.component.js.map