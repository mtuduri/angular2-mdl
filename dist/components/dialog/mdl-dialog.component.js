import { Component, ViewChild, TemplateRef, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { MdlDialogService } from './mdl-dialog.service';
import { toBoolean } from './../common/boolean-property';
var MdlDialogComponent = /** @class */ (function () {
    function MdlDialogComponent(dialogService) {
        this.dialogService = dialogService;
        this.showEmitter = new EventEmitter();
        this.hideEmitter = new EventEmitter();
        this.isShown = false;
        this.dialogRef = null;
    }
    Object.defineProperty(MdlDialogComponent.prototype, "modal", {
        get: function () { return this._modal; },
        set: function (value) { this._modal = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    MdlDialogComponent.prototype.show = function () {
        var _this = this;
        if (this.isShown) {
            throw new Error('Only one instance of an embedded mdl-dialog can exist!');
        }
        this.isShown = true;
        var mergedConfig = this.config || {};
        // mdl-modal overwrites config.isModal if present
        mergedConfig.isModal = typeof this.modal !== 'undefined' ? this.modal : mergedConfig.isModal;
        // default is true
        if (typeof mergedConfig.isModal === 'undefined') {
            mergedConfig.isModal = true;
        }
        var result = new Subject();
        var p = this.dialogService.showDialogTemplate(this.template, mergedConfig);
        p.subscribe(function (dialogRef) {
            _this.dialogRef = dialogRef;
            _this.dialogRef.onVisible().subscribe(function () {
                _this.showEmitter.emit(dialogRef);
                result.next(dialogRef);
                result.complete();
            });
            _this.dialogRef.onHide().subscribe(function () {
                _this.hideEmitter.emit(null);
                _this.dialogRef = null;
                _this.isShown = false;
            });
        });
        return result.asObservable();
    };
    MdlDialogComponent.prototype.close = function () {
        if (this.dialogRef) {
            this.dialogRef.hide();
        }
    };
    MdlDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-dialog',
                    template: "\n    <div *dialogTemplate>\n      <ng-content></ng-content>\n    </div>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlDialogComponent.ctorParameters = function () { return [
        { type: MdlDialogService }
    ]; };
    MdlDialogComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        modal: [{ type: Input, args: ['mdl-modal',] }],
        config: [{ type: Input, args: ['mdl-dialog-config',] }],
        showEmitter: [{ type: Output, args: ['show',] }],
        hideEmitter: [{ type: Output, args: ['hide',] }]
    };
    return MdlDialogComponent;
}());
export { MdlDialogComponent };
//# sourceMappingURL=mdl-dialog.component.js.map