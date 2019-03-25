import { Component, NgModule, ViewEncapsulation } from '@angular/core';
var MdlIconComponent = /** @class */ (function () {
    function MdlIconComponent() {
    }
    MdlIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-icon',
                    host: {
                        '[class.material-icons]': 'true'
                    },
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    return MdlIconComponent;
}());
export { MdlIconComponent };
var MDL_ICON_DIRECTIVES = [MdlIconComponent];
var MdlIconModule = /** @class */ (function () {
    function MdlIconModule() {
    }
    MdlIconModule.forRoot = function () {
        return {
            ngModule: MdlIconModule,
            providers: []
        };
    };
    MdlIconModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_ICON_DIRECTIVES,
                    declarations: MDL_ICON_DIRECTIVES,
                },] },
    ];
    return MdlIconModule;
}());
export { MdlIconModule };
//# sourceMappingURL=mdl-icon.component.js.map