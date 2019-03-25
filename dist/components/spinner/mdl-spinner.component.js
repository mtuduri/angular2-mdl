import { Component, Input, NgModule, ViewEncapsulation } from '@angular/core';
import { toBoolean } from '../common/boolean-property';
import { CommonModule } from '@angular/common';
var MdlSpinnerComponent = /** @class */ (function () {
    function MdlSpinnerComponent() {
        this.layers = [1, 2, 3, 4];
        this._active = false;
        this._singleColor = false;
    }
    Object.defineProperty(MdlSpinnerComponent.prototype, "active", {
        get: function () { return this._active; },
        set: function (value) { this._active = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlSpinnerComponent.prototype, "singleColor", {
        get: function () { return this._singleColor; },
        set: function (value) { this._singleColor = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    MdlSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-spinner',
                    host: {
                        '[class.mdl-spinner]': 'true',
                        '[class.is-upgraded]': 'true',
                        '[class.is-active]': 'active',
                        '[class.mdl-spinner--single-color]': 'singleColor',
                    },
                    // must be one line - otherwise the spinner is broken in the ui
                    /* tslint:disable */
                    template: "\n    <div *ngFor=\"let layer of layers;\" \n            class=\"mdl-spinner__layer mdl-spinner__layer-{{layer}}\">\n      <div class=\"mdl-spinner__circle-clipper mdl-spinner__left\">\n         <div class=\"mdl-spinner__circle\"></div>\n      </div><div class=\"mdl-spinner__gap-patch\"><div class=\"mdl-spinner__circle\"></div></div><div class=\"mdl-spinner__circle-clipper mdl-spinner__right\"><div class=\"mdl-spinner__circle\"></div></div>\n    </div>\n  "
                    /* tslint:enable */ ,
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    MdlSpinnerComponent.propDecorators = {
        active: [{ type: Input }],
        singleColor: [{ type: Input, args: ['single-color',] }]
    };
    return MdlSpinnerComponent;
}());
export { MdlSpinnerComponent };
var MDL_SPINNER_DIRECTIVES = [MdlSpinnerComponent];
var MdlSpinnerModule = /** @class */ (function () {
    function MdlSpinnerModule() {
    }
    MdlSpinnerModule.forRoot = function () {
        return {
            ngModule: MdlSpinnerModule,
            providers: []
        };
    };
    MdlSpinnerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: MDL_SPINNER_DIRECTIVES,
                    declarations: MDL_SPINNER_DIRECTIVES,
                },] },
    ];
    return MdlSpinnerModule;
}());
export { MdlSpinnerModule };
//# sourceMappingURL=mdl-spinner.component.js.map