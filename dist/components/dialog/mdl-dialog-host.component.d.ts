import { ElementRef, OnInit, ComponentRef, NgZone, Renderer2 } from '@angular/core';
import { IMdlDialogConfiguration } from './mdl-dialog-configuration';
import { InternalMdlDialogReference } from './internal-dialog-reference';
import { Animations } from '../common/animations';
export declare class MdlDialogHostComponent implements OnInit {
    private ngZone;
    private renderer;
    private animations;
    private elementRef;
    private config;
    private internalDialogRef;
    dialogTarget: any;
    visible: boolean;
    private showAnimationStartStyle;
    private showStyle;
    private hideAnimationEndStyle;
    constructor(ngZone: NgZone, renderer: Renderer2, animations: Animations, elementRef: ElementRef, config: IMdlDialogConfiguration, internalDialogRef: InternalMdlDialogReference);
    zIndex: number;
    show(): void;
    hide(selfComponentRef: ComponentRef<MdlDialogHostComponent>): void;
    ngOnInit(): void;
    private applyStyle;
    private applyClasses;
    private isAnimateEnabled;
    private getClientRect;
    private createOpenCloseRect;
    private getCenterInScreen;
}
