import { OnChanges, OnInit, ModuleWithProviders, SimpleChanges } from '@angular/core';
import { MdlError } from '../common/mdl-error';
export declare class MdlUnsupportedCountOfListItemLinesError extends MdlError {
    constructor(lines: number | string);
}
export declare class MdlListComponent {
}
export declare class MdlListItemComponent implements OnChanges {
    private _lines;
    lines: number;
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class MdlListItemPrimaryContentComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemComponent);
    ngOnInit(): void;
}
export declare class MdlListItemSecondaryContentComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemComponent);
    ngOnInit(): void;
}
export declare class MdlListItemSecondaryActionComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemComponent);
    ngOnInit(): void;
}
export declare class MdlListItemSubTitleComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemPrimaryContentComponent);
    ngOnInit(): void;
}
export declare class MdlListItemSecondaryInfoComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemSecondaryContentComponent);
    ngOnInit(): void;
}
export declare class MdlListItemTextBodyComponent implements OnInit {
    private mdlListItemComponent;
    constructor(mdlListItemComponent: MdlListItemComponent);
    ngOnInit(): void;
}
export declare class MdlListItemIconDirective {
}
export declare class MdlListItemAvatarDirective {
}
export declare class MdlListModule {
    static forRoot(): ModuleWithProviders;
}
