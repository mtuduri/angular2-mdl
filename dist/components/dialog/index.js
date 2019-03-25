import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlDialogService } from './mdl-dialog.service';
import { MdlDialogComponent } from './mdl-dialog.component';
import { MdlSimpleDialogComponent } from './mdl-simple-dialog.component';
import { MdlCommonsModule } from '../common/index';
import { MdlDialogHostComponent } from './mdl-dialog-host.component';
import { MdlAlertComponent } from './mdl-alert.component';
import { MdlDialogOutletModule } from '../dialog-outlet/index';
import { MdlButtonModule } from '../button/mdl-button.component';
import { MdlDialogOutletService } from '../dialog-outlet/mdl-dialog-outlet.service';
export * from './mdl-dialog.component';
export * from './mdl-dialog.service';
export * from './mdl-alert.component';
var PUBLIC_COMPONENTS = [
    MdlDialogComponent,
    MdlAlertComponent
];
var PRIVATE_COMPONENTS = [
    MdlDialogHostComponent,
    MdlSimpleDialogComponent
];
var MdlDialogModule = /** @class */ (function () {
    function MdlDialogModule() {
    }
    MdlDialogModule.forRoot = function () {
        return {
            ngModule: MdlDialogModule,
            providers: [
                MdlDialogService,
                MdlDialogOutletService
            ]
        };
    };
    MdlDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MdlCommonsModule,
                        MdlButtonModule,
                        MdlDialogOutletModule
                    ],
                    exports: PUBLIC_COMPONENTS.slice(),
                    declarations: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS),
                    entryComponents: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS)
                },] },
    ];
    return MdlDialogModule;
}());
export { MdlDialogModule };
//# sourceMappingURL=index.js.map