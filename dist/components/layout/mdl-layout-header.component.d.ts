import { ElementRef, Renderer2, QueryList } from '@angular/core';
import { MdlLayoutTabPanelComponent } from './mdl-layout-tab-panel.component';
import { MdlLayoutComponent } from './mdl-layout.component';
export declare class MdlLayoutHeaderComponent {
    private elementRef;
    private renderer;
    private mdlLayout;
    mode: string;
    el: HTMLElement;
    isCompact: boolean;
    isAnimating: boolean;
    isSeamed: boolean;
    isRipple: boolean;
    tabs: QueryList<MdlLayoutTabPanelComponent>;
    constructor(elementRef: ElementRef, renderer: Renderer2, mdlLayout: MdlLayoutComponent);
    onTransitionEnd(): void;
    onClick(): void;
}
