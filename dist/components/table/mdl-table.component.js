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
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
var MdlDefaultTableModel = /** @class */ (function () {
    function MdlDefaultTableModel(columns) {
        this.data = [];
        this.columns = columns;
    }
    MdlDefaultTableModel.prototype.addAll = function (data) {
        var _a;
        (_a = this.data).push.apply(_a, data);
    };
    return MdlDefaultTableModel;
}());
export { MdlDefaultTableModel };
var template = "\n        <table class=\"mdl-data-table\">\n           <thead>\n           <tr>\n              <th *ngIf=\"selectable\">\n                 <mdl-checkbox mdl-ripple [ngModel]=\"isAllSelected()\" (ngModelChange)=\"toogleAll()\"></mdl-checkbox>\n              </th>\n              <th *ngFor=\"let column of model.columns\"\n                  [ngClass]=\"{'mdl-data-table__cell--non-numeric': !column.numeric}\">\n                 {{column.name}}\n              </th>\n           </tr>\n           </thead>\n           <tbody>\n           <tr *ngFor=\"let data of model.data; let i = index\" [ngClass]=\"{'is-selected': selectable && data.selected}\">\n              <td *ngIf=\"selectable\">\n                 <mdl-checkbox mdl-ripple\n                      [(ngModel)]=\"data.selected\"\n                      (ngModelChange)=\"selectionChanged(data)\"></mdl-checkbox>\n              </td>\n              <td *ngFor=\"let column of model.columns\"\n                  [ngClass]=\"{'mdl-data-table__cell--non-numeric': !column.numeric}\"\n                  [innerHTML]=\"data[column.key]\">\n              </td>\n           </tr>\n           </tbody>\n        </table>  \n    ";
var styles = [
    "\n    :host{\n      display:inline-block;\n    }\n    "
];
var MdlTableComponent = /** @class */ (function () {
    function MdlTableComponent() {
        this.selectable = false;
    }
    MdlTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-table',
                    template: template,
                    styles: styles,
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    MdlTableComponent.propDecorators = {
        model: [{ type: Input, args: ['table-model',] }]
    };
    return MdlTableComponent;
}());
export { MdlTableComponent };
var MdlSelectableTableComponent = /** @class */ (function (_super) {
    __extends(MdlSelectableTableComponent, _super);
    function MdlSelectableTableComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectionChange = new EventEmitter();
        _this.selectable = true;
        _this.allSelected = false;
        return _this;
    }
    MdlSelectableTableComponent.prototype.isAllSelected = function () {
        return this.model.data.every(function (data) { return data.selected; });
    };
    MdlSelectableTableComponent.prototype.toogleAll = function () {
        var selected = !this.isAllSelected();
        this.model.data.forEach(function (data) { return data.selected = selected; });
        this.updateSelected();
    };
    MdlSelectableTableComponent.prototype.updateSelected = function () {
        this.selected = this.model.data.filter(function (data) { return data.selected; });
        this.selectionChange.emit({ value: this.selected });
    };
    MdlSelectableTableComponent.prototype.selectionChanged = function (data) {
        this.updateSelected();
    };
    MdlSelectableTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdl-table-selectable',
                    template: template,
                    styles: styles,
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    MdlSelectableTableComponent.propDecorators = {
        model: [{ type: Input, args: ['table-model',] }],
        selected: [{ type: Input, args: ['table-model-selected',] }],
        selectionChange: [{ type: Output, args: ['table-model-selectionChanged',] }]
    };
    return MdlSelectableTableComponent;
}(MdlTableComponent));
export { MdlSelectableTableComponent };
//# sourceMappingURL=mdl-table.component.js.map