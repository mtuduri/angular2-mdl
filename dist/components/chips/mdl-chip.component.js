import { Component, Input, EventEmitter, Output, ContentChild, ViewEncapsulation } from '@angular/core';
import { MdlChipContactDirective } from './mdl-chip-contact.directive';
var MdlChipComponent = /** @class */ (function () {
    function MdlChipComponent() {
        this.actionClick = new EventEmitter();
    }
    MdlChipComponent.prototype.action = function () {
        this.actionClick.emit();
    };
    MdlChipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-chip',
                    host: {
                        '[class.mdl-chip]': 'true',
                        '[class.mdl-chip--contact]': 'chipContact'
                    },
                    template: "\n    <ng-content></ng-content>\n    <span *ngIf=\"mdlLabel\" class=\"mdl-chip__text\">{{mdlLabel}}</span>\n    <button *ngIf=\"mdlActionIcon\" (click)=\"action()\" type=\"button\" class=\"mdl-chip__action\">\n      <mdl-icon>{{mdlActionIcon}}</mdl-icon>\n    </button>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    MdlChipComponent.propDecorators = {
        mdlLabel: [{ type: Input, args: ['mdl-label',] }],
        mdlActionIcon: [{ type: Input, args: ['mdl-action-icon',] }],
        actionClick: [{ type: Output, args: ['action-click',] }],
        chipContact: [{ type: ContentChild, args: [MdlChipContactDirective,] }]
    };
    return MdlChipComponent;
}());
export { MdlChipComponent };
//# sourceMappingURL=mdl-chip.component.js.map