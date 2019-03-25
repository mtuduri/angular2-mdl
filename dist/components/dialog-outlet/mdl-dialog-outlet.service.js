import { Injectable, ApplicationRef, ComponentFactoryResolver, EventEmitter, NgZone } from '@angular/core';
import { MdlDialogOutletComponent } from './mdl-dialog-outlet.component';
import { MdlBackdropOverlayComponent } from './mdl-backdrop-overlay.component';
import { take } from 'rxjs/operators';
var MdlDialogOutletService = /** @class */ (function () {
    function MdlDialogOutletService(appRef, componentFactoryResolver, ngZone) {
        var _this = this;
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.backdropClickEmitter = new EventEmitter();
        var dialogOutletCompRef = null;
        ngZone.onStable.pipe(take(1)).subscribe(function () {
            try {
                dialogOutletCompRef = _this.appRef.bootstrap(MdlDialogOutletComponent);
            }
            catch (e) {
                // the user did not use the dialog.outlet element outside of his root app.
                // console.log(e);
            }
            if (dialogOutletCompRef) {
                _this.setViewContainerRef(dialogOutletCompRef.instance.viewContainerRef);
            }
        });
    }
    MdlDialogOutletService.prototype.setDefaultViewContainerRef = function (vCRef) {
        this.setViewContainerRef(vCRef);
    };
    Object.defineProperty(MdlDialogOutletService.prototype, "viewContainerRef", {
        get: function () {
            return this.viewContainerRef_;
        },
        enumerable: true,
        configurable: true
    });
    MdlDialogOutletService.prototype.setViewContainerRef = function (value) {
        var _this = this;
        this.viewContainerRef_ = value;
        if (this.viewContainerRef_) {
            var cFactory = this.componentFactoryResolver.resolveComponentFactory(MdlBackdropOverlayComponent);
            this.backdropComponent = this.viewContainerRef_.createComponent(cFactory).instance;
            this.backdropComponent.clickEmitter.subscribe(function () {
                _this.backdropClickEmitter.emit();
            });
        }
    };
    MdlDialogOutletService.prototype.hideBackdrop = function () {
        this.backdropComponent.hide();
    };
    MdlDialogOutletService.prototype.showBackdropWithZIndex = function (zIndex) {
        this.backdropComponent.showWithZIndex(zIndex);
    };
    MdlDialogOutletService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MdlDialogOutletService.ctorParameters = function () { return [
        { type: ApplicationRef },
        { type: ComponentFactoryResolver },
        { type: NgZone }
    ]; };
    return MdlDialogOutletService;
}());
export { MdlDialogOutletService };
//# sourceMappingURL=mdl-dialog-outlet.service.js.map