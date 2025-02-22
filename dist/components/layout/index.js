import { NgModule } from '@angular/core';
import { MdlLayoutComponent, MdlScreenSizeService } from './mdl-layout.component';
import { MdlLayoutHeaderComponent } from './mdl-layout-header.component';
import { MdlLayoutDrawerComponent } from './mdl-layout-drawer.component';
import { MdlLayoutContentComponent } from './mdl-layout-content.component';
import { MdlLayoutHeaderTransparentDirective } from './mdl-layout-header-transparent.directive';
import { MdlLayoutHeaderRowComponent } from './mdl-layout-header-row.component';
import { MdlLayoutTitleComponent } from './mdl-layout-title.component';
import { MdlLayoutSpacerComponent } from './mdl-layout-spacer.component';
import { MdlLayoutTabPanelComponent } from './mdl-layout-tab-panel.component';
import { MdlIconModule } from '../icon/mdl-icon.component';
import { MdlRippleModule } from '../common/mdl-ripple.directive';
import { MdlCommonsModule } from '../common/index';
import { CommonModule } from '@angular/common';
import { MdlTabsModule } from '../tabs/index';
var MDL_LAYOUT_DIRECTIVES = [
    MdlLayoutComponent,
    MdlLayoutHeaderComponent,
    MdlLayoutDrawerComponent,
    MdlLayoutContentComponent,
    MdlLayoutHeaderTransparentDirective,
    MdlLayoutHeaderRowComponent,
    MdlLayoutTitleComponent,
    MdlLayoutSpacerComponent,
    MdlLayoutTabPanelComponent
];
export * from './mdl-layout.component';
export * from './mdl-layout-header.component';
export * from './mdl-layout-drawer.component';
export * from './mdl-layout-content.component';
export * from './mdl-layout-header-transparent.directive';
export * from './mdl-layout-header-row.component';
export * from './mdl-layout-title.component';
export * from './mdl-layout-spacer.component';
export * from './mdl-layout-tab-panel.component';
var MdlLayoutModule = /** @class */ (function () {
    function MdlLayoutModule() {
    }
    MdlLayoutModule.forRoot = function () {
        return {
            ngModule: MdlLayoutModule,
            providers: [
                MdlScreenSizeService
            ]
        };
    };
    MdlLayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MdlIconModule, MdlRippleModule, MdlCommonsModule, MdlTabsModule, CommonModule],
                    exports: MDL_LAYOUT_DIRECTIVES,
                    declarations: MDL_LAYOUT_DIRECTIVES,
                },] },
    ];
    return MdlLayoutModule;
}());
export { MdlLayoutModule };
//# sourceMappingURL=index.js.map