import { ElementRef, OnChanges, Renderer2, ModuleWithProviders, SimpleChanges } from '@angular/core';
export declare class MdlRippleDirective implements OnChanges {
    private elementRef;
    renderer: Renderer2;
    private cssContainerClasses;
    private RIPPLE;
    private rippleContainer;
    el: HTMLElement;
    private ripple;
    rippleActive: boolean | string;
    constructor(elementRef: ElementRef, renderer: Renderer2, cssContainerClasses: string[]);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlButtonRippleDirective extends MdlRippleDirective {
    rippleActive: boolean | string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlCheckboxRippleDirective extends MdlRippleDirective {
    rippleActive: boolean | string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlRadioRippleDirective extends MdlRippleDirective {
    rippleActive: boolean | string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlIconToggleRippleDirective extends MdlRippleDirective {
    rippleActive: boolean | string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlSwitchRippleDirective extends MdlRippleDirective {
    rippleActive: boolean | string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlMenuItemRippleDirective extends MdlRippleDirective {
    rippleActive: boolean | string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlAnchorRippleDirective extends MdlRippleDirective {
    rippleActive: boolean | string;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlRippleModule {
    static forRoot(): ModuleWithProviders;
}
