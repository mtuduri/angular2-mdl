import { MdlTabsComponent } from './mdl-tabs.component';
import { MdlTabPanelComponent, MdlTabPanelContent } from './mdl-tab-panel.component';
import { MdlTabPanelTitleComponent } from './mdl-tab-panel-title.component';
import { NgModule } from '@angular/core';
import { MdlRippleModule } from '../common/mdl-ripple.directive';
import { MdlCommonsModule } from '../common/index';
import { CommonModule } from '@angular/common';
export * from './mdl-tabs.component';
export * from './mdl-tab-panel.component';
export * from './mdl-tab-panel-title.component';
var MDL_TABS_DIRECTIVES = [
    MdlTabsComponent,
    MdlTabPanelComponent,
    MdlTabPanelTitleComponent,
    MdlTabPanelContent
];
var MdlTabsModule = /** @class */ (function () {
    function MdlTabsModule() {
    }
    MdlTabsModule.forRoot = function () {
        return {
            ngModule: MdlTabsModule,
            providers: []
        };
    };
    MdlTabsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MdlRippleModule, MdlCommonsModule, CommonModule],
                    exports: MDL_TABS_DIRECTIVES,
                    declarations: MDL_TABS_DIRECTIVES.slice(),
                },] },
    ];
    return MdlTabsModule;
}());
export { MdlTabsModule };
//# sourceMappingURL=index.js.map