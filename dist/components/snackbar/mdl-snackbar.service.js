import { Component, Injectable, ComponentFactoryResolver, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlDialogOutletService } from '../dialog-outlet/mdl-dialog-outlet.service';
import { MdlDialogOutletModule } from '../dialog-outlet/index';
import { Subject } from 'rxjs';
var ANIMATION_TIME = 250;
var MdlSnackbarComponent = /** @class */ (function () {
    function MdlSnackbarComponent() {
        this.showIt = false;
    }
    MdlSnackbarComponent.prototype.onClick = function () {
        this.onAction();
    };
    MdlSnackbarComponent.prototype.isActive = function () {
        return this.showIt;
    };
    MdlSnackbarComponent.prototype.show = function () {
        var _this = this;
        var result = new Subject();
        // wait unit the dom is in place - then showIt will change the css class
        setTimeout(function () {
            _this.showIt = true;
            // fire after the view animation is done
            setTimeout(function () {
                result.next(null);
                result.complete();
            }, ANIMATION_TIME);
        }, ANIMATION_TIME);
        return result.asObservable();
    };
    MdlSnackbarComponent.prototype.hide = function () {
        this.showIt = false;
        var result = new Subject();
        // fire after the view animation is done
        setTimeout(function () {
            result.next(null);
            result.complete();
        }, ANIMATION_TIME);
        return result.asObservable();
    };
    MdlSnackbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-snackbar-component',
                    template: "\n    <div id=\"demo-toast-example\" class=\" mdl-snackbar\" [ngClass]=\"{'mdl-snackbar--active': showIt }\">\n      <div class=\"mdl-snackbar__text\">{{message}}</div>\n      <button *ngIf=\"onAction\" class=\"mdl-snackbar__action\" type=\"button\" (click)=\"onClick()\" >{{actionText}}</button>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlSnackbarComponent.ctorParameters = function () { return []; };
    return MdlSnackbarComponent;
}());
export { MdlSnackbarComponent };
var MdlSnackbarService = /** @class */ (function () {
    function MdlSnackbarService(componentFactoryResolver, dialogOutletService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dialogOutletService = dialogOutletService;
        this.cFactory = this.componentFactoryResolver.resolveComponentFactory(MdlSnackbarComponent);
    }
    MdlSnackbarService.prototype.showToast = function (message, timeout) {
        return this.showSnackbar({
            message: message,
            timeout: timeout
        });
    };
    MdlSnackbarService.prototype.showSnackbar = function (snackbarMessage) {
        var optTimeout = snackbarMessage.timeout || 2750;
        var closeAfterTimeout = !!snackbarMessage.closeAfterTimeout;
        var viewContainerRef = this.dialogOutletService.viewContainerRef;
        if (!viewContainerRef) {
            throw new Error('You did not provide a ViewContainerRef. ' +
                'Please see https://github.com/mseemann/angular2-mdl/wiki/How-to-use-the-MdlDialogService');
        }
        var cRef = viewContainerRef.createComponent(this.cFactory, viewContainerRef.length);
        var mdlSnackbarComponent = cRef.instance;
        mdlSnackbarComponent.message = snackbarMessage.message;
        if (this.previousSnack) {
            var previousSnack_1 = this.previousSnack;
            var subscription_1 = previousSnack_1.component.hide()
                .subscribe(function () {
                previousSnack_1.cRef.destroy();
                subscription_1.unsubscribe();
            });
        }
        this.previousSnack = {
            component: mdlSnackbarComponent,
            cRef: cRef
        };
        if (snackbarMessage.action) {
            if (closeAfterTimeout) {
                this.hideAndDestroySnack(mdlSnackbarComponent, cRef, optTimeout);
            }
            mdlSnackbarComponent.actionText = snackbarMessage.action.text;
            mdlSnackbarComponent.onAction = function () {
                mdlSnackbarComponent.hide().subscribe(function () {
                    cRef.destroy();
                    snackbarMessage.action.handler();
                });
            };
        }
        else {
            this.hideAndDestroySnack(mdlSnackbarComponent, cRef, optTimeout);
        }
        var result = new Subject();
        mdlSnackbarComponent.show().subscribe(function () {
            result.next(mdlSnackbarComponent);
            result.complete();
        });
        return result.asObservable();
    };
    MdlSnackbarService.prototype.hideAndDestroySnack = function (component, componentRef, timeOut) {
        setTimeout(function () {
            component.hide()
                .subscribe(function () {
                componentRef.destroy();
            });
        }, timeOut);
    };
    MdlSnackbarService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MdlSnackbarService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: MdlDialogOutletService }
    ]; };
    return MdlSnackbarService;
}());
export { MdlSnackbarService };
var MdlSnackbarModule = /** @class */ (function () {
    function MdlSnackbarModule() {
    }
    MdlSnackbarModule.forRoot = function () {
        return {
            ngModule: MdlSnackbarModule,
            providers: [MdlSnackbarService]
        };
    };
    MdlSnackbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, MdlDialogOutletModule.forRoot()],
                    exports: [MdlSnackbarComponent],
                    declarations: [MdlSnackbarComponent],
                    entryComponents: [MdlSnackbarComponent]
                },] },
    ];
    return MdlSnackbarModule;
}());
export { MdlSnackbarModule };
//# sourceMappingURL=mdl-snackbar.service.js.map