var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, ElementRef, Renderer2, ViewEncapsulation, Input } from '@angular/core';
import { MdlTooltipPositionService } from './mdl-tooltip-position.service';
var IS_ACTIVE = 'is-active';
var host = {
    '[class.mdl-tooltip]': 'true',
    '[class.mdl-tooltip--large]': 'large',
    '[class.mdl-tooltip--left]': 'position=="left"',
    '[class.mdl-tooltip--right]': 'position=="right"',
    '[class.mdl-tooltip--top]': 'position=="top"',
    '[class.mdl-tooltip--bottom]': 'position=="bottom"'
};
var MdlSimpleTooltipComponent = /** @class */ (function () {
    function MdlSimpleTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.mdlTooltipPositionService = mdlTooltipPositionService;
        this.large = false;
        this.active = false;
        this.element = elRef.nativeElement;
    }
    MdlSimpleTooltipComponent.prototype.mouseLeave = function () {
        if (this.delayTimeout) {
            clearTimeout(this.delayTimeout);
        }
        this.setActive(false);
    };
    MdlSimpleTooltipComponent.prototype.mouseEnter = function (event) {
        var _this = this;
        if (this.delay) {
            this.delayTimeout = setTimeout(function () {
                _this.show(event.target);
            }, this.delay);
        }
        else {
            this.show(event.target);
        }
    };
    MdlSimpleTooltipComponent.prototype.show = function (element) {
        var props = element.getBoundingClientRect();
        var offsetWidth = this.element.offsetWidth;
        var offsetHeight = this.element.offsetHeight;
        var style = this.mdlTooltipPositionService.calcStyle(offsetWidth, offsetHeight, props, this.position);
        for (var key in style) {
            this.renderer.setStyle(this.elRef.nativeElement, key, style[key]);
        }
        this.setActive(true);
    };
    MdlSimpleTooltipComponent.prototype.setActive = function (active) {
        this.active = active;
        if (active) {
            this.renderer.addClass(this.elRef.nativeElement, IS_ACTIVE);
        }
        else {
            this.renderer.removeClass(this.elRef.nativeElement, IS_ACTIVE);
        }
    };
    MdlSimpleTooltipComponent.prototype.isActive = function () {
        return this.active;
    };
    MdlSimpleTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-simple-tooltip',
                    host: host,
                    template: '<div>{{tooltipText}}</div>',
                    providers: [MdlTooltipPositionService],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlSimpleTooltipComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MdlTooltipPositionService }
    ]; };
    MdlSimpleTooltipComponent.propDecorators = {
        delay: [{ type: Input }]
    };
    return MdlSimpleTooltipComponent;
}());
export { MdlSimpleTooltipComponent };
var MdlTooltipComponent = /** @class */ (function (_super) {
    __extends(MdlTooltipComponent, _super);
    function MdlTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        return _super.call(this, elRef, renderer, mdlTooltipPositionService) || this;
    }
    MdlTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-tooltip',
                    template: '<div><ng-content></ng-content></div>',
                    exportAs: 'mdlTooltip',
                    host: host,
                    providers: [MdlTooltipPositionService],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlTooltipComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MdlTooltipPositionService }
    ]; };
    return MdlTooltipComponent;
}(MdlSimpleTooltipComponent));
export { MdlTooltipComponent };
//# sourceMappingURL=mdl-tooltip.component.js.map