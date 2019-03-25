import { NgModule } from '@angular/core';
import { MdlTooltipComponent, MdlSimpleTooltipComponent } from './mdl-tooltip.component';
import { MdlTooltipDirective, MdlTooltipLargeDirective } from './mdl-tooltip.directive';
var MDL_TOOLTIP_DIRECTIVES = [
    MdlTooltipComponent,
    MdlTooltipLargeDirective,
    MdlTooltipDirective
];
export * from './mdl-tooltip.component';
export * from './mdl-tooltip.directive';
var MdlTooltipModule = /** @class */ (function () {
    function MdlTooltipModule() {
    }
    MdlTooltipModule.forRoot = function () {
        return {
            ngModule: MdlTooltipModule,
            providers: []
        };
    };
    MdlTooltipModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: MDL_TOOLTIP_DIRECTIVES,
                    declarations: MDL_TOOLTIP_DIRECTIVES.concat([MdlSimpleTooltipComponent]),
                    entryComponents: [MdlSimpleTooltipComponent]
                },] },
    ];
    return MdlTooltipModule;
}());
export { MdlTooltipModule };
//# sourceMappingURL=index.js.map