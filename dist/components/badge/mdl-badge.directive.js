import { Directive, Input, ElementRef, Renderer2, NgModule } from '@angular/core';
var DATA_BADE_ATTR = 'data-badge';
var MdlBadgeDirective = /** @class */ (function () {
    function MdlBadgeDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = elementRef.nativeElement;
    }
    MdlBadgeDirective.prototype.ngOnChanges = function (changes) {
        if (this.mdlBadgeContent === null || typeof this.mdlBadgeContent === 'undefined') {
            this.renderer.removeAttribute(this.el, DATA_BADE_ATTR);
            return;
        }
        this.renderer.setAttribute(this.el, DATA_BADE_ATTR, this.mdlBadgeContent);
    };
    MdlBadgeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-badge]',
                    host: {
                        '[class.mdl-badge]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    MdlBadgeDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdlBadgeDirective.propDecorators = {
        mdlBadgeContent: [{ type: Input, args: ['mdl-badge',] }]
    };
    return MdlBadgeDirective;
}());
export { MdlBadgeDirective };
var MdlBadgeOverlapDirective = /** @class */ (function () {
    function MdlBadgeOverlapDirective() {
    }
    MdlBadgeOverlapDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-badge-overlap]',
                    host: {
                        '[class.mdl-badge--overlap]': 'true'
                    }
                },] },
    ];
    return MdlBadgeOverlapDirective;
}());
export { MdlBadgeOverlapDirective };
var MdlBadgeNoBackgroundDirective = /** @class */ (function () {
    function MdlBadgeNoBackgroundDirective() {
    }
    MdlBadgeNoBackgroundDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-badge-no-background]',
                    host: {
                        '[class.mdl-badge--no-background]': 'true'
                    }
                },] },
    ];
    return MdlBadgeNoBackgroundDirective;
}());
export { MdlBadgeNoBackgroundDirective };
var MDL_BADGE_DIRECTIVES = [MdlBadgeDirective, MdlBadgeOverlapDirective, MdlBadgeNoBackgroundDirective];
var MdlBadgeModule = /** @class */ (function () {
    function MdlBadgeModule() {
    }
    MdlBadgeModule.forRoot = function () {
        return {
            ngModule: MdlBadgeModule,
            providers: []
        };
    };
    MdlBadgeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_BADGE_DIRECTIVES,
                    declarations: MDL_BADGE_DIRECTIVES,
                },] },
    ];
    return MdlBadgeModule;
}());
export { MdlBadgeModule };
//# sourceMappingURL=mdl-badge.directive.js.map