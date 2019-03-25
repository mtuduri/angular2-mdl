import { EventEmitter, NgZone } from '@angular/core';
export declare class MdlBackdropOverlayComponent {
    private ngZone;
    clickEmitter: EventEmitter<any>;
    constructor(ngZone: NgZone);
    readonly display: string;
    private visible;
    zIndex: number;
    onBackdropClick(e: any): void;
    hide(): void;
    showWithZIndex(zIndex: number): void;
}
