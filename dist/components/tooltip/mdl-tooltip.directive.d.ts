import { OnInit, ViewContainerRef, Renderer2, ComponentFactoryResolver, OnChanges, SimpleChanges } from '@angular/core';
import { MdlSimpleTooltipComponent, MdlTooltipComponent } from './mdl-tooltip.component';
export declare class AbstractMdlTooltipDirective implements OnInit, OnChanges {
    private vcRef;
    private large;
    private componentFactoryResolver;
    private renderer;
    protected tooltip: string | MdlTooltipComponent;
    protected position: 'left' | 'right' | 'top' | 'bottom';
    protected tooltipComponent: MdlSimpleTooltipComponent;
    constructor(vcRef: ViewContainerRef, large: boolean, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private configureTooltipComponent;
    onMouseEnter(event: any): void;
    onMouseLeave(): void;
}
export declare class MdlTooltipDirective extends AbstractMdlTooltipDirective {
    tooltip: string | MdlTooltipComponent;
    position: 'left' | 'right' | 'top' | 'bottom';
    constructor(vcRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlTooltipLargeDirective extends AbstractMdlTooltipDirective {
    tooltip: string | MdlTooltipComponent;
    position: 'left' | 'right' | 'top' | 'bottom';
    constructor(vcRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
