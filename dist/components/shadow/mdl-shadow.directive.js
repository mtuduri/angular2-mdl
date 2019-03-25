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
import { MdlError } from '../common/mdl-error';
import { toNumber } from '../common/number.property';
var MdlUnsupportedShadowValueError = /** @class */ (function (_super) {
    __extends(MdlUnsupportedShadowValueError, _super);
    function MdlUnsupportedShadowValueError(value) {
        /* istanbul ignore next */
        return _super.call(this, "Shadow value \"" + value + "\" isn't supported (allowed: 2,3,4,6,8,16,24).") || this;
    }
    return MdlUnsupportedShadowValueError;
}(MdlError));
export { MdlUnsupportedShadowValueError };
var MDL_SHADOW_VALUES = [0, 2, 3, 4, 6, 8, 16, 24];
var MdlShadowDirective = /** @class */ (function () {
    function MdlShadowDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._mdlShadow = 2;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlShadowDirective.prototype, "mdlShadow", {
        get: function () { return this._mdlShadow; },
        set: function (value) { this._mdlShadow = toNumber(value); },
        enumerable: true,
        configurable: true
    });
    MdlShadowDirective.prototype.ngOnChanges = function (changes) {
        if (MDL_SHADOW_VALUES.indexOf(Number(this.mdlShadow)) === -1) {
            throw new MdlUnsupportedShadowValueError(this.mdlShadow);
        }
        var change = changes['mdlShadow'];
        if (!change.isFirstChange()) {
            this.renderer.removeClass(this.el, "mdl-shadow--" + change.previousValue + "dp");
        }
        this.renderer.addClass(this.el, "mdl-shadow--" + change.currentValue + "dp");
    };
    MdlShadowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-shadow]'
                },] },
    ];
    /** @nocollapse */
    MdlShadowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlShadowDirective.propDecorators = {
        mdlShadow: [{ type: Input, args: ['mdl-shadow',] }]
    };
    return MdlShadowDirective;
}());
export { MdlShadowDirective };
var MDL_SHADOW_DIRECTIVES = [MdlShadowDirective];
var MdlShadowModule = /** @class */ (function () {
    function MdlShadowModule() {
    }
    MdlShadowModule.forRoot = function () {
        return {
            ngModule: MdlShadowModule,
            providers: []
        };
    };
    MdlShadowModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_SHADOW_DIRECTIVES,
                    declarations: MDL_SHADOW_DIRECTIVES,
                },] },
    ];
    return MdlShadowModule;
}());
export { MdlShadowModule };
//# sourceMappingURL=mdl-shadow.directive.js.map