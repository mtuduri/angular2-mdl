import { ElementRef, OnChanges, Renderer2, ModuleWithProviders, SimpleChanges } from '@angular/core';
import { MdlError } from '../common/mdl-error';
export declare class MdlUnsupportedButtonTypeError extends MdlError {
    constructor(type: string);
}
export declare class MdlUnsupportedColoredTypeError extends MdlError {
    constructor(type: string);
}
export declare class MdlButtonComponent implements OnChanges {
    elementRef: ElementRef;
    private renderer;
    private element;
    mdlButtonType: 'raised' | 'fab' | 'mini-fab' | 'icon' | '';
    mdlColoredType: 'primary' | 'accent' | '';
    private _disabled;
    disabled: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    onMouseUp(): void;
    onMouseLeave(): void;
    blurIt(): void;
}
export declare class MdlButtonModule {
    static forRoot(): ModuleWithProviders;
}
