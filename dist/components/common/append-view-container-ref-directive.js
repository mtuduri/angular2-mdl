import { Directive, ViewContainerRef, Renderer2, Input } from '@angular/core';
var AppendViewContainerRefDirective = /** @class */ (function () {
    function AppendViewContainerRefDirective(viewRef, renderer) {
        this.viewRef = viewRef;
        this.renderer = renderer;
    }
    AppendViewContainerRefDirective.prototype.ngAfterViewInit = function () {
        this.renderer.appendChild(this.viewRef.element.nativeElement, this.viewContainerRefToAppend.element.nativeElement);
    };
    AppendViewContainerRefDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[append-view-container-ref]'
                },] },
    ];
    /** @nocollapse */
    AppendViewContainerRefDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Renderer2 }
    ]; };
    AppendViewContainerRefDirective.propDecorators = {
        viewContainerRefToAppend: [{ type: Input, args: ['append-view-container-ref',] }]
    };
    return AppendViewContainerRefDirective;
}());
export { AppendViewContainerRefDirective };
//# sourceMappingURL=append-view-container-ref-directive.js.map