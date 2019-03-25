import { Component, ContentChildren, QueryList, Input, Output, EventEmitter, ViewEncapsulation, } from '@angular/core';
import { toBoolean } from '../common/boolean-property';
import { toNumber } from '../common/number.property';
import { MdlTabPanelComponent } from './mdl-tab-panel.component';
var MdlTabsComponent = /** @class */ (function () {
    function MdlTabsComponent() {
        this._selectedIndex = 0;
        this._isRipple = false;
        this.selectedTabEmitter = new EventEmitter();
    }
    Object.defineProperty(MdlTabsComponent.prototype, "selectedIndex", {
        get: function () { return this._selectedIndex; },
        set: function (value) { this._selectedIndex = toNumber(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTabsComponent.prototype, "isRipple", {
        get: function () { return this._isRipple; },
        set: function (value) { this._isRipple = toBoolean(value); },
        enumerable: true,
        configurable: true
    });
    MdlTabsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // the initial tabs
        this.updateSelectedTabIndex();
        // listen to tab changes - this would not be necessary if this would be fixed:
        // https://github.com/angular/angular/issues/12818
        this.tabs.changes.subscribe(function () {
            _this.updateSelectedTabIndex();
        });
    };
    MdlTabsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlTabsComponent.prototype.updateSelectedTabIndex = function () {
        var _this = this;
        if (this.tabs) {
            // https://github.com/angular/angular/issues/6005
            // this would not be necessare if this would be fixed: https://github.com/angular/angular/issues/12818
            setTimeout(function () {
                _this.tabs.forEach(function (tab, idx) {
                    tab.isActive = _this.selectedIndex === idx;
                });
            }, 1);
        }
    };
    MdlTabsComponent.prototype.tabSelected = function (tab) {
        if (tab.disabled) {
            return;
        }
        var index = this.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    MdlTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-tabs',
                    host: {
                        '[class.mdl-tabs]': 'true',
                        '[class.is-upgraded]': 'true'
                    },
                    template: "\n   <div class=\"mdl-tabs__tab-bar\">\n      <div *ngFor=\"let tab of tabs.toArray()\">\n        <div\n          *ngIf=\"tab.titleComponent\"\n          class=\"mdl-tabs__tab\"\n          (click)=\"tabSelected(tab)\"\n          [mdl-ripple]=\"isRipple && !tab.disabled\"\n          [ngClass]=\"{'is-active': tab.isActive, 'disabled': tab.disabled}\"\n          [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n        <a *ngIf=\"!tab.titleComponent\" href=\"javascript:void(0)\"\n              (click)=\"tabSelected(tab)\"\n              class=\"mdl-tabs__tab\"\n              [mdl-ripple]=\"isRipple && !tab.disabled\"\n              [ngClass]=\"{'is-active': tab.isActive, 'disabled': tab.disabled}\">{{tab.title}}</a>\n       </div>\n  </div>\n  <ng-content></ng-content>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    MdlTabsComponent.propDecorators = {
        selectedIndex: [{ type: Input, args: ['mdl-tab-active-index',] }],
        isRipple: [{ type: Input, args: ['mdl-ripple',] }],
        selectedTabEmitter: [{ type: Output, args: ['mdl-tab-active-changed',] }],
        tabs: [{ type: ContentChildren, args: [MdlTabPanelComponent,] }]
    };
    return MdlTabsComponent;
}());
export { MdlTabsComponent };
//# sourceMappingURL=mdl-tabs.component.js.map