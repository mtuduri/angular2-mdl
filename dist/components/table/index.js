import { NgModule } from '@angular/core';
import { MdlTableComponent, MdlSelectableTableComponent } from './mdl-table.component';
import { MdlCheckboxModule } from '../checkbox/mdl-checkbox.component';
import { MdlRippleModule } from '../common/mdl-ripple.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
export * from './mdl-table.component';
var MDL_TABLE_DIRECTIVES = [
    MdlTableComponent,
    MdlSelectableTableComponent
];
var MdlTableModule = /** @class */ (function () {
    function MdlTableModule() {
    }
    MdlTableModule.forRoot = function () {
        return {
            ngModule: MdlTableModule,
            providers: []
        };
    };
    MdlTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [MdlCheckboxModule, MdlRippleModule, CommonModule, FormsModule],
                    exports: MDL_TABLE_DIRECTIVES,
                    declarations: MDL_TABLE_DIRECTIVES,
                },] },
    ];
    return MdlTableModule;
}());
export { MdlTableModule };
//# sourceMappingURL=index.js.map