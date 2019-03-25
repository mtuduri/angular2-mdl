import { ViewContainerRef, ApplicationRef, ComponentFactoryResolver, EventEmitter, NgZone } from '@angular/core';
export declare class MdlDialogOutletService {
    private appRef;
    private componentFactoryResolver;
    private viewContainerRef_;
    private backdropComponent;
    backdropClickEmitter: EventEmitter<any>;
    constructor(appRef: ApplicationRef, componentFactoryResolver: ComponentFactoryResolver, ngZone: NgZone);
    setDefaultViewContainerRef(vCRef: ViewContainerRef): void;
    readonly viewContainerRef: ViewContainerRef;
    private setViewContainerRef;
    hideBackdrop(): void;
    showBackdropWithZIndex(zIndex: number): void;
}
