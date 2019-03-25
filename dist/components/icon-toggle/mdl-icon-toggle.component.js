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
import { Component, ElementRef, forwardRef, NgModule, ViewEncapsulation, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MdlIconModule } from '../icon/mdl-icon.component';
import { MdlCheckboxComponent } from '../checkbox/mdl-checkbox.component';
var MdlIconToggleComponent = /** @class */ (function (_super) {
    __extends(MdlIconToggleComponent, _super);
    function MdlIconToggleComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    MdlIconToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-icon-toggle',
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MdlIconToggleComponent; }),
                            multi: true
                        }],
                    host: {
                        '(click)': 'onClick()',
                        '[class.mdl-icon-toggle]': 'true',
                        '[class.is-upgraded]': 'true',
                        '[class.is-checked]': 'value',
                        '[class.is-disabled]': 'disabled'
                    },
                    outputs: ['change'],
                    template: "\n  <input type=\"checkbox\" class=\"mdl-icon-toggle__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [(ngModel)]=\"value\">\n  <mdl-icon class=\"mdl-icon-toggle__label\"><ng-content></ng-content></mdl-icon>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlIconToggleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return MdlIconToggleComponent;
}(MdlCheckboxComponent));
export { MdlIconToggleComponent };
var MDL_ICON_TOGGLE_DIRECTIVES = [MdlIconToggleComponent];
var MdlIconToggleModule = /** @class */ (function () {
    function MdlIconToggleModule() {
    }
    MdlIconToggleModule.forRoot = function () {
        return {
            ngModule: MdlIconToggleModule,
            providers: []
        };
    };
    MdlIconToggleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MdlIconModule, CommonModule, FormsModule],
                    exports: MDL_ICON_TOGGLE_DIRECTIVES,
                    declarations: MDL_ICON_TOGGLE_DIRECTIVES,
                },] },
    ];
    return MdlIconToggleModule;
}());
export { MdlIconToggleModule };
//# sourceMappingURL=mdl-icon-toggle.component.js.map