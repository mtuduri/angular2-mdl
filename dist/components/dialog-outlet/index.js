import { NgModule } from '@angular/core';
import { MdlDialogOutletComponent, MdlDialogInnerOutletComponent } from './mdl-dialog-outlet.component';
import { MdlDialogOutletService } from './mdl-dialog-outlet.service';
import { MdlBackdropOverlayComponent } from './mdl-backdrop-overlay.component';
export * from './mdl-dialog-outlet.component';
export * from './mdl-dialog-outlet.service';
var PUBLIC_COMPONENTS = [
    MdlDialogInnerOutletComponent
];
var PRIVATE_COMPONENTS = [
    MdlDialogOutletComponent,
    MdlBackdropOverlayComponent
];
var MdlDialogOutletModule = /** @class */ (function () {
    function MdlDialogOutletModule() {
    }
    MdlDialogOutletModule.forRoot = function () {
        return {
            ngModule: MdlDialogOutletModule,
            providers: [MdlDialogOutletService]
        };
    };
    MdlDialogOutletModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: PUBLIC_COMPONENTS,
                    declarations: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS),
                    entryComponents: [
                        MdlDialogOutletComponent,
                        MdlBackdropOverlayComponent
                    ]
                },] },
    ];
    return MdlDialogOutletModule;
}());
export { MdlDialogOutletModule };
//# sourceMappingURL=index.js.map