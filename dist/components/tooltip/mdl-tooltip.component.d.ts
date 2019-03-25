import { ElementRef, Renderer2 } from '@angular/core';
import { MdlTooltipPositionService } from './mdl-tooltip-position.service';
export declare class MdlSimpleTooltipComponent {
    private elRef;
    private renderer;
    private mdlTooltipPositionService;
    tooltipText: string;
    element: HTMLElement;
    large: boolean;
    position: 'left' | 'right' | 'top' | 'bottom';
    private active;
    delay: Number;
    private delayTimeout;
    constructor(elRef: ElementRef, renderer: Renderer2, mdlTooltipPositionService: MdlTooltipPositionService);
    mouseLeave(): void;
    mouseEnter(event: any): void;
    private show;
    private setActive;
    isActive(): boolean;
}
export declare class MdlTooltipComponent extends MdlSimpleTooltipComponent {
    constructor(elRef: ElementRef, renderer: Renderer2, mdlTooltipPositionService: MdlTooltipPositionService);
}
