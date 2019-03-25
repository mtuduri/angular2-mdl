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
import { Component, Directive, Input, Optional, ViewEncapsulation, NgModule } from '@angular/core';
import { MdlError, MdlStructureError } from '../common/mdl-error';
import { toNumber } from '../common/number.property';
var MdlUnsupportedCountOfListItemLinesError = /** @class */ (function (_super) {
    __extends(MdlUnsupportedCountOfListItemLinesError, _super);
    function MdlUnsupportedCountOfListItemLinesError(lines) {
        /* istanbul ignore next */
        return _super.call(this, "\"" + lines + "\" is not supported - max 3 lines please.") || this;
    }
    return MdlUnsupportedCountOfListItemLinesError;
}(MdlError));
export { MdlUnsupportedCountOfListItemLinesError };
var MdlListComponent = /** @class */ (function () {
    function MdlListComponent() {
    }
    MdlListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list',
                    host: {
                        '[class.mdl-list]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    return MdlListComponent;
}());
export { MdlListComponent };
var MdlListItemComponent = /** @class */ (function () {
    function MdlListItemComponent() {
        this._lines = 1;
    }
    Object.defineProperty(MdlListItemComponent.prototype, "lines", {
        get: function () { return this._lines; },
        set: function (value) { this._lines = toNumber(value); },
        enumerable: true,
        configurable: true
    });
    MdlListItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.lines && this.lines > 3) {
            throw new MdlUnsupportedCountOfListItemLinesError(this.lines);
        }
    };
    MdlListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item',
                    host: {
                        '[class.mdl-list__item]': 'true',
                        '[class.mdl-list__item--two-line]': 'lines==2',
                        '[class.mdl-list__item--three-line]': 'lines==3'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    MdlListItemComponent.propDecorators = {
        lines: [{ type: Input }]
    };
    return MdlListItemComponent;
}());
export { MdlListItemComponent };
var MdlListItemPrimaryContentComponent = /** @class */ (function () {
    function MdlListItemPrimaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemPrimaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-primary-content', 'mdl-list-item');
        }
    };
    MdlListItemPrimaryContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-primary-content',
                    host: {
                        '[class.mdl-list__item-primary-content]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemPrimaryContentComponent.ctorParameters = function () { return [
        { type: MdlListItemComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlListItemPrimaryContentComponent;
}());
export { MdlListItemPrimaryContentComponent };
var MdlListItemSecondaryContentComponent = /** @class */ (function () {
    function MdlListItemSecondaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-secondary-content', 'mdl-list-item');
        }
    };
    MdlListItemSecondaryContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-secondary-content',
                    host: {
                        '[class.mdl-list__item-secondary-content]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemSecondaryContentComponent.ctorParameters = function () { return [
        { type: MdlListItemComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlListItemSecondaryContentComponent;
}());
export { MdlListItemSecondaryContentComponent };
var MdlListItemSecondaryActionComponent = /** @class */ (function () {
    function MdlListItemSecondaryActionComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryActionComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-secondary-action', 'mdl-list-item');
        }
    };
    MdlListItemSecondaryActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-secondary-action',
                    host: {
                        '[class.mdl-list__item-secondary-action]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemSecondaryActionComponent.ctorParameters = function () { return [
        { type: MdlListItemComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlListItemSecondaryActionComponent;
}());
export { MdlListItemSecondaryActionComponent };
var MdlListItemSubTitleComponent = /** @class */ (function () {
    function MdlListItemSubTitleComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSubTitleComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-sub-title', 'mdl-list-item-primary-content');
        }
    };
    MdlListItemSubTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-sub-title',
                    host: {
                        '[class.mdl-list__item-sub-title]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemSubTitleComponent.ctorParameters = function () { return [
        { type: MdlListItemPrimaryContentComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlListItemSubTitleComponent;
}());
export { MdlListItemSubTitleComponent };
var MdlListItemSecondaryInfoComponent = /** @class */ (function () {
    function MdlListItemSecondaryInfoComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryInfoComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-secondary-info', 'mdl-list-item-secondary-content');
        }
    };
    MdlListItemSecondaryInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-secondary-info',
                    host: {
                        '[class.mdl-list__item-secondary-info]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemSecondaryInfoComponent.ctorParameters = function () { return [
        { type: MdlListItemSecondaryContentComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlListItemSecondaryInfoComponent;
}());
export { MdlListItemSecondaryInfoComponent };
var MdlListItemTextBodyComponent = /** @class */ (function () {
    function MdlListItemTextBodyComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemTextBodyComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new MdlStructureError('mdl-list-item-text-body', 'mdl-list-item');
        }
    };
    MdlListItemTextBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-list-item-text-body',
                    host: {
                        '[class.mdl-list__item-text-body]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlListItemTextBodyComponent.ctorParameters = function () { return [
        { type: MdlListItemComponent, decorators: [{ type: Optional }] }
    ]; };
    return MdlListItemTextBodyComponent;
}());
export { MdlListItemTextBodyComponent };
var MdlListItemIconDirective = /** @class */ (function () {
    function MdlListItemIconDirective() {
    }
    MdlListItemIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-icon[mdl-list-item-icon]',
                    host: {
                        '[class.mdl-list__item-icon]': 'true'
                    }
                },] },
    ];
    return MdlListItemIconDirective;
}());
export { MdlListItemIconDirective };
var MdlListItemAvatarDirective = /** @class */ (function () {
    function MdlListItemAvatarDirective() {
    }
    MdlListItemAvatarDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdl-icon[mdl-list-item-avatar]',
                    host: {
                        '[class.mdl-list__item-avatar]': 'true'
                    }
                },] },
    ];
    return MdlListItemAvatarDirective;
}());
export { MdlListItemAvatarDirective };
var MDL_LIST_DIRECTIVES = [
    MdlListComponent,
    MdlListItemComponent,
    MdlListItemPrimaryContentComponent,
    MdlListItemIconDirective,
    MdlListItemAvatarDirective,
    MdlListItemSecondaryContentComponent,
    MdlListItemSecondaryActionComponent,
    MdlListItemSubTitleComponent,
    MdlListItemSecondaryInfoComponent,
    MdlListItemTextBodyComponent
];
var MdlListModule = /** @class */ (function () {
    function MdlListModule() {
    }
    MdlListModule.forRoot = function () {
        return {
            ngModule: MdlListModule,
            providers: []
        };
    };
    MdlListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_LIST_DIRECTIVES,
                    declarations: MDL_LIST_DIRECTIVES,
                },] },
    ];
    return MdlListModule;
}());
export { MdlListModule };
//# sourceMappingURL=mdl-list.component.js.map