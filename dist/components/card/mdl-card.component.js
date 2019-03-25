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
import { Component, Directive, Optional, ViewEncapsulation, NgModule } from '@angular/core';
import { MdlStructureError } from '../common/mdl-error';
var MdlCardComponent = /** @class */ (function () {
    function MdlCardComponent() {
    }
    MdlCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card',
                    host: {
                        '[class.mdl-card]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    return MdlCardComponent;
}());
export { MdlCardComponent };
var MdlCardChildStructure = /** @class */ (function () {
    function MdlCardChildStructure(mdlCardComponent, childComponentName) {
        this.mdlCardComponent = mdlCardComponent;
        this.childComponentName = childComponentName;
    }
    MdlCardChildStructure.prototype.ngOnInit = function () {
        if (this.mdlCardComponent === null) {
            throw new MdlStructureError(this.childComponentName, 'mdl-card');
        }
    };
    return MdlCardChildStructure;
}());
export { MdlCardChildStructure };
var MdlCardTitleComponent = /** @class */ (function (_super) {
    __extends(MdlCardTitleComponent, _super);
    function MdlCardTitleComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-title') || this;
    }
    MdlCardTitleComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlCardTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card-title',
                    host: {
                        '[class.mdl-card__title]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardTitleComponent.ctorParameters = function () { return [
        { type: MdlCardComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlCardTitleComponent;
}(MdlCardChildStructure));
export { MdlCardTitleComponent };
var MdlCardSupportingTextComponent = /** @class */ (function (_super) {
    __extends(MdlCardSupportingTextComponent, _super);
    function MdlCardSupportingTextComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-supporting-text') || this;
    }
    MdlCardSupportingTextComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlCardSupportingTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card-supporting-text',
                    host: {
                        '[class.mdl-card__supporting-text]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardSupportingTextComponent.ctorParameters = function () { return [
        { type: MdlCardComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlCardSupportingTextComponent;
}(MdlCardChildStructure));
export { MdlCardSupportingTextComponent };
var MdlCardMediaComponent = /** @class */ (function (_super) {
    __extends(MdlCardMediaComponent, _super);
    function MdlCardMediaComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-media') || this;
    }
    MdlCardMediaComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlCardMediaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card-media',
                    host: {
                        '[class.mdl-card__media]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardMediaComponent.ctorParameters = function () { return [
        { type: MdlCardComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlCardMediaComponent;
}(MdlCardChildStructure));
export { MdlCardMediaComponent };
var MdlCardActionsComponent = /** @class */ (function (_super) {
    __extends(MdlCardActionsComponent, _super);
    function MdlCardActionsComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-actions') || this;
    }
    MdlCardActionsComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlCardActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card-actions',
                    host: {
                        '[class.mdl-card__actions]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardActionsComponent.ctorParameters = function () { return [
        { type: MdlCardComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlCardActionsComponent;
}(MdlCardChildStructure));
export { MdlCardActionsComponent };
var MdlCardMenuComponent = /** @class */ (function (_super) {
    __extends(MdlCardMenuComponent, _super);
    function MdlCardMenuComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-menu') || this;
    }
    MdlCardMenuComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlCardMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-card-menu',
                    host: {
                        '[class.mdl-card__menu]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlCardMenuComponent.ctorParameters = function () { return [
        { type: MdlCardComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlCardMenuComponent;
}(MdlCardChildStructure));
export { MdlCardMenuComponent };
var MdlCardTitleTextDirective = /** @class */ (function () {
    function MdlCardTitleTextDirective() {
    }
    MdlCardTitleTextDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-card-title-text]',
                    host: {
                        '[class.mdl-card__title-text]': 'true'
                    }
                },] },
    ];
    return MdlCardTitleTextDirective;
}());
export { MdlCardTitleTextDirective };
var MdlCardBorderDirective = /** @class */ (function () {
    function MdlCardBorderDirective() {
    }
    MdlCardBorderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-card-border]',
                    host: {
                        '[class.mdl-card--border]': 'true'
                    }
                },] },
    ];
    return MdlCardBorderDirective;
}());
export { MdlCardBorderDirective };
var MdlCardExpandDirective = /** @class */ (function () {
    function MdlCardExpandDirective() {
    }
    MdlCardExpandDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdl-card-expand]',
                    host: {
                        '[class.mdl-card--expand]': 'true'
                    }
                },] },
    ];
    return MdlCardExpandDirective;
}());
export { MdlCardExpandDirective };
var MDL_CARD_DIRECTIVES = [
    MdlCardComponent,
    MdlCardTitleComponent,
    MdlCardMediaComponent,
    MdlCardSupportingTextComponent,
    MdlCardActionsComponent,
    MdlCardMenuComponent,
    MdlCardTitleTextDirective,
    MdlCardBorderDirective,
    MdlCardExpandDirective
];
var MdlCardModule = /** @class */ (function () {
    function MdlCardModule() {
    }
    MdlCardModule.forRoot = function () {
        return {
            ngModule: MdlCardModule,
            providers: []
        };
    };
    MdlCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_CARD_DIRECTIVES,
                    declarations: MDL_CARD_DIRECTIVES,
                },] },
    ];
    return MdlCardModule;
}());
export { MdlCardModule };
//# sourceMappingURL=mdl-card.component.js.map