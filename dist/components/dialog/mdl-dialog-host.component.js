import { Component, ViewEncapsulation, ViewContainerRef, Inject, forwardRef, ViewChild, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { MIN_DIALOG_Z_INDEX, MDL_CONFIGUARTION } from './mdl-dialog.service';
import { MdlButtonComponent } from '../button/mdl-button.component';
import { InternalMdlDialogReference } from './internal-dialog-reference';
import { Animations } from '../common/animations';
var enterTransitionDuration = 300;
var leaveTransitionDuration = 250;
var enterTransitionEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
var leaveTransitionEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
// @experimental
var MdlDialogHostComponent = /** @class */ (function () {
    function MdlDialogHostComponent(ngZone, renderer, animations, elementRef, config, internalDialogRef) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.animations = animations;
        this.elementRef = elementRef;
        this.config = config;
        this.internalDialogRef = internalDialogRef;
        this.visible = false;
        this.showAnimationStartStyle = {
            top: '38%',
            opacity: '0'
        };
        this.showStyle = {
            top: '50%',
            opacity: '1'
        };
        this.hideAnimationEndStyle = {
            top: '63%',
            opacity: '0'
        };
        this.zIndex = MIN_DIALOG_Z_INDEX + 1;
    }
    MdlDialogHostComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        // give the dialogs time to draw so that a focus can be set
        setTimeout(function () {
            _this.internalDialogRef.visible();
        });
        if (this.isAnimateEnabled()) {
            if (this.config.openFrom || this.config.closeTo) {
                // transform is modified during anmiation and must be part of each animation keyframe.
                this.showStyle['transform'] = 'translate(0, -50%) scale(1.0)';
                var targetClientRect = this.elementRef.nativeElement.getBoundingClientRect();
                var openFromRect = this.getClientRect(this.config.openFrom);
                var closeToRect = this.config.closeTo ? this.getClientRect(this.config.closeTo) : openFromRect;
                var centerTarget = this.getCenterInScreen(targetClientRect);
                var centerFrom = this.getCenterInScreen(openFromRect);
                var centerTo = this.getCenterInScreen(closeToRect);
                var translationFrom = {
                    x: Math.round(centerFrom.cx - centerTarget.cx),
                    y: Math.round(centerFrom.cy - centerTarget.cy),
                    scaleX: Math.round(100 * Math.min(0.25, openFromRect.width / targetClientRect.width)) / 100,
                    scaleY: Math.round(100 * Math.min(0.25, openFromRect.height / targetClientRect.height)) / 100
                };
                this.showAnimationStartStyle = {
                    top: targetClientRect.top + "px",
                    opacity: '0',
                    transform: "translate(" + translationFrom.x + "px, " + translationFrom.y + "px) scale(" + translationFrom.scaleX + ", " + translationFrom.scaleY + ")"
                };
                var translationTo = {
                    x: Math.round(centerTo.cx - centerTarget.cx),
                    y: Math.round(centerTo.cy - centerTarget.cy),
                    scaleX: Math.round(100 * Math.min(0.25, closeToRect.width / targetClientRect.width)) / 100,
                    scaleY: Math.round(100 * Math.min(0.25, closeToRect.height / targetClientRect.height)) / 100
                };
                this.hideAnimationEndStyle = {
                    top: targetClientRect.top + "px",
                    opacity: '0',
                    transform: "translate(" + translationTo.x + "px, " + translationTo.y + "px) scale(" + translationTo.scaleX + ", " + translationTo.scaleY + ")"
                };
            }
            var animation = this.animations.animate(this.elementRef.nativeElement, [
                this.showAnimationStartStyle,
                this.showStyle
            ], this.config.enterTransitionDuration || enterTransitionDuration, this.config.enterTransitionEasingCurve || enterTransitionEasingCurve);
            animation.play();
        }
    };
    MdlDialogHostComponent.prototype.hide = function (selfComponentRef) {
        if (this.isAnimateEnabled()) {
            var animation = this.animations.animate(this.elementRef.nativeElement, [
                this.showStyle,
                this.hideAnimationEndStyle
            ], this.config.leaveTransitionDuration || leaveTransitionDuration, this.config.leaveTransitionEasingCurve || leaveTransitionEasingCurve);
            animation.onDone(function () {
                selfComponentRef.destroy();
            });
            animation.play();
        }
        else {
            selfComponentRef.destroy();
        }
    };
    MdlDialogHostComponent.prototype.ngOnInit = function () {
        this.applyStyle(this.config.styles);
        this.applyClasses(this.config.classes ? this.config.classes : '');
    };
    MdlDialogHostComponent.prototype.applyStyle = function (styles) {
        if (styles) {
            for (var style in styles) {
                this.renderer.setStyle(this.elementRef.nativeElement, style, styles[style]);
            }
        }
    };
    MdlDialogHostComponent.prototype.applyClasses = function (classes) {
        var _this = this;
        classes.split(' ').filter(function (cssClass) { return !!cssClass; }).forEach(function (cssClass) {
            _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
        });
    };
    MdlDialogHostComponent.prototype.isAnimateEnabled = function () {
        // not present?  assume it is true.
        if (typeof this.config.animate === 'undefined') {
            return true;
        }
        return this.config.animate;
    };
    MdlDialogHostComponent.prototype.getClientRect = function (input) {
        if (input instanceof MdlButtonComponent) {
            var elRef = input.elementRef;
            var rect = elRef.nativeElement.getBoundingClientRect();
            return this.createOpenCloseRect(rect);
        }
        else if (input instanceof MouseEvent) {
            var evt = input;
            // just to make it possible to test this code with a fake event - target is
            // readonly and con not be mutated.
            var htmlElement = (evt.target || evt['testtarget']);
            var rect = htmlElement.getBoundingClientRect();
            return this.createOpenCloseRect(rect);
        }
        return input;
    };
    MdlDialogHostComponent.prototype.createOpenCloseRect = function (rect) {
        return {
            height: rect.top - rect.bottom,
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left
        };
    };
    MdlDialogHostComponent.prototype.getCenterInScreen = function (rect) {
        return {
            cx: Math.round(rect.left + (rect.width / 2)),
            cy: Math.round(rect.top + (rect.height / 2))
        };
    };
    MdlDialogHostComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-dialog-host-component',
                    host: {
                        '[class.mdl-dialog]': 'true',
                        '[class.open]': 'visible',
                        '[style.zIndex]': 'zIndex',
                    },
                    template: "<div #dialogTarget></div>",
                    styles: [
                        "\n    mdl-dialog-host-component {\n      width: -moz-fit-content;\n      width: -webkit-fit-content;\n      width: fit-content;\n      height: -moz-fit-content;\n      height: -webkit-fit-content;\n      height: fit-content;\n      padding: 1em;\n      background: white;\n      color: black;\n      opacity: 1;\n      visibility: hidden;\n      display: block;\n      position: fixed;\n      margin: auto;\n      left: 0;\n      right: 0;\n      transition: all;\n      top: 50%;\n      transform: translate(0, -50%);\n    }\n    \n    mdl-dialog-host-component.open {\n      visibility: visible;\n    }\n    \n    "
                    ],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlDialogHostComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: Renderer2 },
        { type: Animations },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [forwardRef(function () { return MDL_CONFIGUARTION; }),] }] },
        { type: InternalMdlDialogReference }
    ]; };
    MdlDialogHostComponent.propDecorators = {
        dialogTarget: [{ type: ViewChild, args: ['dialogTarget', { read: ViewContainerRef },] }]
    };
    return MdlDialogHostComponent;
}());
export { MdlDialogHostComponent };
//# sourceMappingURL=mdl-dialog-host.component.js.map