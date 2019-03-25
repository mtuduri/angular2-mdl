var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, ContentChild, Input, Renderer2, ViewEncapsulation, ElementRef, Output, EventEmitter, Optional, Inject, Injectable, InjectionToken, NgZone } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { MdlError } from '../common/mdl-error';
import { toBoolean } from '../common/boolean-property';
import { toNumber } from '../common/number.property';
import { MdlLayoutHeaderComponent } from './mdl-layout-header.component';
import { MdlLayoutDrawerComponent } from './mdl-layout-drawer.component';
import { MdlLayoutContentComponent } from './mdl-layout-content.component';
import { BehaviorSubject } from 'rxjs';
var ESCAPE = 27;
var STANDARD = 'standard';
var WATERFALL = 'waterfall';
var SCROLL = 'scroll';
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
export var LAYOUT_SCREEN_SIZE_THRESHOLD = new InjectionToken('layoutScreenSizeThreshold');
var MdLUnsupportedLayoutTypeError = /** @class */ (function (_super) {
    __extends(MdLUnsupportedLayoutTypeError, _super);
    function MdLUnsupportedLayoutTypeError(type) {
        /* istanbul ignore next */
        return _super.call(this, "Layout type \"" + type + "\" isn't supported by mdl-layout (allowed: standard, waterfall, scroll).") || this;
    }
    return MdLUnsupportedLayoutTypeError;
}(MdlError));
export { MdLUnsupportedLayoutTypeError };
var MdlScreenSizeService = /** @class */ (function () {
    function MdlScreenSizeService(ngZone, layoutScreenSizeThreshold) {
        var _this = this;
        this.layoutScreenSizeThreshold = layoutScreenSizeThreshold;
        this.sizesSubject = new BehaviorSubject(false);
        // if no value is injected the default size wil be used. same as $layout-screen-size-threshold in scss
        if (!this.layoutScreenSizeThreshold) {
            this.layoutScreenSizeThreshold = 1024;
        }
        // do not try to access the window object if rendered on the server
        if (typeof window === 'object' && 'matchMedia' in window) {
            var query_1 = window.matchMedia("(max-width: " + this.layoutScreenSizeThreshold + "px)");
            var queryListener_1 = function () {
                ngZone.run(function () {
                    _this.sizesSubject.next(query_1.matches);
                });
            };
            query_1.addListener(queryListener_1);
            this.windowMediaQueryListener = function () {
                query_1.removeListener(queryListener_1);
            };
            // set the initial state
            this.sizesSubject.next(query_1.matches);
        }
    }
    MdlScreenSizeService.prototype.isSmallScreen = function () {
        return this.sizesSubject.value;
    };
    MdlScreenSizeService.prototype.sizes = function () {
        return this.sizesSubject.asObservable();
    };
    MdlScreenSizeService.prototype.destroy = function () {
        if (this.windowMediaQueryListener) {
            this.windowMediaQueryListener();
            this.windowMediaQueryListener = null;
        }
    };
    MdlScreenSizeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MdlScreenSizeService.ctorParameters = function () { return [
        { type: NgZone },
        { type: Number, decorators: [{ type: Optional }, { type: Inject, args: [LAYOUT_SCREEN_SIZE_THRESHOLD,] }] }
    ]; };
    return MdlScreenSizeService;
}());
export { MdlScreenSizeService };
var MdlLayoutComponent = /** @class */ (function () {
    function MdlLayoutComponent(renderer, evm, el, screenSizeService) {
        this.renderer = renderer;
        this.evm = evm;
        this.el = el;
        this.screenSizeService = screenSizeService;
        this.mode = STANDARD;
        this._isFixedDrawer = false;
        this._isFixedHeader = false;
        this._isSeamed = false;
        this._selectedIndex = 0;
        this._isNoDrawer = false;
        this.selectedTabEmitter = new EventEmitter();
        this.mouseoverTabEmitter = new EventEmitter();
        this.mouseoutTabEmitter = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.isDrawerVisible = false;
        this.isSmallScreen = false;
    }
    Object.defineProperty(MdlLayoutComponent.prototype, "isFixedDrawer", {
        get: function () { return this._isFixedDrawer; },
        set: function (value) { this._isFixedDrawer = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isFixedHeader", {
        get: function () { return this._isFixedHeader; },
        set: function (value) { this._isFixedHeader = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isSeamed", {
        get: function () { return this._isSeamed; },
        set: function (value) { this._isSeamed = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "selectedIndex", {
        get: function () { return this._selectedIndex; },
        set: function (value) { this._selectedIndex = toNumber(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isNoDrawer", {
        get: function () { return this._isNoDrawer; },
        set: function (value) { this._isNoDrawer = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    MdlLayoutComponent.prototype.ngAfterContentInit = function () {
        this.validateMode();
        if (this.header && this.content && this.content.tabs) {
            this.header.tabs = this.content.tabs;
            this.updateSelectedTabIndex();
        }
        // set this.drawer to null, if the drawer is not a direct child if this layout. It may be a drywer of a sub layout.
        if (this.drawer && !this.drawer.isDrawerDirectChildOf(this)) {
            this.drawer = null;
        }
    };
    MdlLayoutComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlLayoutComponent.prototype.updateSelectedTabIndex = function () {
        if (this.header && this.header.tabs) {
            this.header.tabs.forEach(function (tab) { return tab.isActive = false; });
            if (this.header.tabs.toArray().length > 0 && this.selectedIndex < this.header.tabs.toArray().length) {
                this.header.tabs.toArray()[this.selectedIndex].isActive = true;
            }
        }
    };
    MdlLayoutComponent.prototype.validateMode = function () {
        var _this = this;
        if (this.mode === '') {
            this.mode = STANDARD;
        }
        if ([STANDARD, WATERFALL, SCROLL].indexOf(this.mode) === -1) {
            throw new MdLUnsupportedLayoutTypeError(this.mode);
        }
        if (this.header) {
            // inform the header about the mode
            this.header.mode = this.mode;
            this.header.isSeamed = this.isSeamed;
        }
        if (this.content) {
            this.scrollListener = this.renderer.listen(this.content.el, 'scroll', function (e) {
                _this.onScroll(_this.content.el.scrollTop);
                return true;
            });
            this.screenSizeService.sizes().subscribe(function (isSmall) {
                _this.onQueryChange(isSmall);
            });
        }
    };
    MdlLayoutComponent.prototype.onScroll = function (scrollTop) {
        if (this.mode !== WATERFALL) {
            return;
        }
        if (this.header.isAnimating) {
            return;
        }
        var headerVisible = !this.isSmallScreen || this.isFixedHeader;
        if (scrollTop > 0 && !this.header.isCompact) {
            this.header.isCompact = true;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
        else if (scrollTop <= 0 && this.header.isCompact) {
            this.header.isCompact = false;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
    };
    MdlLayoutComponent.prototype.onQueryChange = function (isSmall) {
        if (isSmall) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.toggleDrawer = function () {
        this.isDrawerVisible = !this.isDrawerVisible;
        if (this.drawer) {
            this.setDrawerVisible(this.isDrawerVisible);
        }
    };
    MdlLayoutComponent.prototype.closeDrawer = function () {
        this.isDrawerVisible = false;
        if (this.drawer) {
            this.setDrawerVisible(false);
        }
    };
    MdlLayoutComponent.prototype.openDrawer = function () {
        this.isDrawerVisible = true;
        if (this.drawer) {
            this.setDrawerVisible(true);
        }
    };
    MdlLayoutComponent.prototype.setDrawerVisible = function (visible) {
        this.drawer.isDrawerVisible = visible;
        this.drawer.isDrawerVisible ? this.onOpen.emit() : this.onClose.emit();
    };
    MdlLayoutComponent.prototype.obfuscatorKeyDown = function ($event) {
        if ($event.keyCode === ESCAPE) {
            this.toggleDrawer();
        }
    };
    MdlLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.tabSelected = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseover = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoverTabEmitter.emit({ index: index });
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseout = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoutTabEmitter.emit({ index: index });
    };
    MdlLayoutComponent.prototype.closeDrawerOnSmallScreens = function () {
        if (this.isSmallScreen && this.isDrawerVisible) {
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.openDrawerOnSmallScreens = function () {
        if (this.isSmallScreen && !this.isDrawerVisible) {
            this.openDrawer();
        }
    };
    MdlLayoutComponent.prototype.hasDrawer = function () {
        return !!this.drawer;
    };
    MdlLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-layout',
                    template: "\n    <div class=\"mdl-layout__container\" [ngClass]=\"{'has-scrolling-header': mode==='scroll'}\">\n     <div class=\"mdl-layout is-upgraded\"\n          [ngClass]=\"{\n          'is-small-screen': isSmallScreen,\n          'mdl-layout--fixed-drawer': isFixedDrawer,\n          'mdl-layout--fixed-header': isFixedHeader,\n          'mdl-layout--fixed-tabs': 'tabs.toArray().length > 0'\n          }\">\n        <ng-content select=\"mdl-layout-header\"></ng-content>\n        <ng-content select=\"mdl-layout-drawer\"></ng-content>\n        <div *ngIf=\"drawer && isNoDrawer==false\" class=\"mdl-layout__drawer-button\" (click)=\"toggleDrawer()\">\n           <mdl-icon>&#xE5D2;</mdl-icon>\n        </div>\n        <ng-content select=\"mdl-layout-content\"></ng-content>\n        <div class=\"mdl-layout__obfuscator\"\n             [ngClass]=\"{'is-visible':isDrawerVisible}\"\n             (click)=\"toggleDrawer()\"\n             (keydown)=\"obfuscatorKeyDown($event)\"></div>\n     </div>\n    </div>\n  ",
                    exportAs: 'mdlLayout',
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    MdlLayoutComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: EventManager },
        { type: ElementRef },
        { type: MdlScreenSizeService }
    ]; };
    MdlLayoutComponent.propDecorators = {
        header: [{ type: ContentChild, args: [MdlLayoutHeaderComponent,] }],
        drawer: [{ type: ContentChild, args: [MdlLayoutDrawerComponent,] }],
        content: [{ type: ContentChild, args: [MdlLayoutContentComponent,] }],
        mode: [{ type: Input, args: ['mdl-layout-mode',] }],
        isFixedDrawer: [{ type: Input, args: ['mdl-layout-fixed-drawer',] }],
        isFixedHeader: [{ type: Input, args: ['mdl-layout-fixed-header',] }],
        isSeamed: [{ type: Input, args: ['mdl-layout-header-seamed',] }],
        selectedIndex: [{ type: Input, args: ['mdl-layout-tab-active-index',] }],
        isNoDrawer: [{ type: Input, args: ['mdl-layout-no-drawer-button',] }],
        selectedTabEmitter: [{ type: Output, args: ['mdl-layout-tab-active-changed',] }],
        mouseoverTabEmitter: [{ type: Output, args: ['mdl-layout-tab-mouseover',] }],
        mouseoutTabEmitter: [{ type: Output, args: ['mdl-layout-tab-mouseout',] }],
        onOpen: [{ type: Output, args: ['open',] }],
        onClose: [{ type: Output, args: ['close',] }]
    };
    return MdlLayoutComponent;
}());
export { MdlLayoutComponent };
//# sourceMappingURL=mdl-layout.component.js.map