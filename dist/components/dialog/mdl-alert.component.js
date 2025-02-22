import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdlDialogService } from './mdl-dialog.service';
var MdlAlertComponent = /** @class */ (function () {
    function MdlAlertComponent(mdlDialogService) {
        this.mdlDialogService = mdlDialogService;
        this.confirmed = new EventEmitter();
    }
    MdlAlertComponent.prototype.show = function () {
        var _this = this;
        this.mdlDialogService.alert(this.message, this.okText, this.title).subscribe(function () {
            _this.confirmed.emit();
        });
    };
    MdlAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-alert',
                    host: {
                        '[style.display]': '"none"'
                    },
                    template: "\n  ",
                    exportAs: 'mdlAlert'
                },] },
    ];
    /** @nocollapse */
    MdlAlertComponent.ctorParameters = function () { return [
        { type: MdlDialogService }
    ]; };
    MdlAlertComponent.propDecorators = {
        title: [{ type: Input }],
        message: [{ type: Input }],
        okText: [{ type: Input }],
        confirmed: [{ type: Output }]
    };
    return MdlAlertComponent;
}());
export { MdlAlertComponent };
//# sourceMappingURL=mdl-alert.component.js.map