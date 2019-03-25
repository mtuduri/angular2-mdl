import { Component, ViewEncapsulation, HostListener, forwardRef, Inject, ViewChildren, QueryList } from '@angular/core';
import { MdlDialogReference, MDL_CONFIGUARTION } from './mdl-dialog.service';
import { MdlButtonComponent } from '../button/mdl-button.component';
var MdlSimpleDialogComponent = /** @class */ (function () {
    // why do i need forwardRef at this point, the demo LoginDialog dosn't need this!?!?
    function MdlSimpleDialogComponent(dialogConfiguration, dialog) {
        var _this = this;
        this.dialogConfiguration = dialogConfiguration;
        this.dialog = dialog;
        dialog.onVisible().subscribe(function () {
            if (_this.buttons) {
                _this.buttons.first.elementRef.nativeElement.focus();
            }
        });
    }
    MdlSimpleDialogComponent.prototype.actionClicked = function (action) {
        action.handler();
        this.dialog.hide();
    };
    MdlSimpleDialogComponent.prototype.onEsc = function () {
        // run the first action that is marked as closing action
        var closeAction = this.dialogConfiguration.actions.find(function (action) { return action.isClosingAction; });
        if (closeAction) {
            closeAction.handler();
            this.dialog.hide();
        }
    };
    MdlSimpleDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-dialog-component',
                    template: "\n      <h3 class=\"mdl-dialog__title\" *ngIf=\"dialogConfiguration?.title\">{{dialogConfiguration?.title}}</h3>\n      <div class=\"mdl-dialog__content\" [innerHTML]=\"dialogConfiguration?.message\"></div>\n      <div \n        class=\"mdl-dialog__actions\" \n        [ngClass]=\"{'mdl-dialog__actions--full-width': dialogConfiguration?.fullWidthAction}\">\n        <button\n          mdl-button mdl-colored=\"primary\"\n          type=\"button\" \n          *ngFor=\"let action of dialogConfiguration?.actions\" \n          (click)=\"actionClicked(action)\"\n          [ngClass]=\"{'close': action.isClosingAction}\">{{action.text}}</button>\n      </div>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlSimpleDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef(function () { return MDL_CONFIGUARTION; }),] }] },
        { type: MdlDialogReference, decorators: [{ type: Inject, args: [forwardRef(function () { return MdlDialogReference; }),] }] }
    ]; };
    MdlSimpleDialogComponent.propDecorators = {
        buttons: [{ type: ViewChildren, args: [MdlButtonComponent,] }],
        onEsc: [{ type: HostListener, args: ['keydown.esc',] }]
    };
    return MdlSimpleDialogComponent;
}());
export { MdlSimpleDialogComponent };
//# sourceMappingURL=mdl-simple-dialog.component.js.map