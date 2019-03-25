import { AfterContentInit, OnDestroy, Renderer2, ElementRef, EventEmitter, OnChanges, SimpleChanges, InjectionToken, NgZone } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { MdlError } from '../common/mdl-error';
import { Observable } from 'rxjs';
/**
 * The LAYOUT_SCREEN_SIZE_THRESHOLD can be changed at the root module. Just provide a value for this InjectionToken:
 *
 * providers: [
 *  {provide:LAYOUT_SCREEN_SIZE_THRESHOLD, useValue: 768 }
 * ]
 *
 * you also need to change the scss variable to the same value: $layout-screen-size-threshold: 768px.
 *
 * It should be clear that this can only be used if you are using the scss and not the pre compiled css from getmdl.io.
 *
 * @type {InjectionToken}
 */
export declare const LAYOUT_SCREEN_SIZE_THRESHOLD: InjectionToken<number>;
export declare class MdLUnsupportedLayoutTypeError extends MdlError {
    constructor(type: string);
}
export declare class MdlScreenSizeService {
    private layoutScreenSizeThreshold;
    private sizesSubject;
    private windowMediaQueryListener;
    constructor(ngZone: NgZone, layoutScreenSizeThreshold: number);
    isSmallScreen(): boolean;
    sizes(): Observable<boolean>;
    destroy(): void;
}
export declare class MdlLayoutComponent implements AfterContentInit, OnDestroy, OnChanges {
    private renderer;
    private evm;
    private el;
    private screenSizeService;
    header: any;
    drawer: any;
    content: any;
    mode: string;
    private _isFixedDrawer;
    isFixedDrawer: boolean;
    private _isFixedHeader;
    isFixedHeader: boolean;
    private _isSeamed;
    isSeamed: boolean;
    private _selectedIndex;
    selectedIndex: number;
    private _isNoDrawer;
    isNoDrawer: boolean;
    selectedTabEmitter: EventEmitter<{}>;
    mouseoverTabEmitter: EventEmitter<{}>;
    mouseoutTabEmitter: EventEmitter<{}>;
    onOpen: EventEmitter<void>;
    onClose: EventEmitter<void>;
    isDrawerVisible: boolean;
    isSmallScreen: boolean;
    private scrollListener;
    constructor(renderer: Renderer2, evm: EventManager, el: ElementRef, screenSizeService: MdlScreenSizeService);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): any;
    private updateSelectedTabIndex;
    private validateMode;
    private onScroll;
    private onQueryChange;
    toggleDrawer(): void;
    closeDrawer(): void;
    openDrawer(): void;
    private setDrawerVisible;
    obfuscatorKeyDown($event: any): void;
    ngOnDestroy(): void;
    tabSelected(tab: any): void;
    onTabMouseover(tab: any): void;
    onTabMouseout(tab: any): void;
    closeDrawerOnSmallScreens(): void;
    openDrawerOnSmallScreens(): void;
    hasDrawer(): boolean;
}
