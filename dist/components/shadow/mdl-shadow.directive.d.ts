import { OnChanges, SimpleChange, ElementRef, Renderer2, ModuleWithProviders } from '@angular/core';
import { MdlError } from '../common/mdl-error';
export declare class MdlUnsupportedShadowValueError extends MdlError {
    constructor(value: number | string);
}
export declare class MdlShadowDirective implements OnChanges {
    private elementRef;
    private renderer;
    private el;
    private _mdlShadow;
    mdlShadow: number;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
}
export declare class MdlShadowModule {
    static forRoot(): ModuleWithProviders;
}
