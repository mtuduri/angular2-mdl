import { EventEmitter } from '@angular/core';
export interface IMdlTableColumn {
    key: string;
    name: string;
    sortable?: boolean;
    numeric?: boolean;
}
export interface IMdlTableModelItem {
    selected: boolean;
}
export interface IMdlTableModel {
    columns: IMdlTableColumn[];
    data: IMdlTableModelItem[];
}
export declare class MdlDefaultTableModel implements IMdlTableModel {
    columns: IMdlTableColumn[];
    data: IMdlTableModelItem[];
    constructor(columns: IMdlTableColumn[]);
    addAll(data: IMdlTableModelItem[]): void;
}
export declare class MdlTableComponent {
    model: IMdlTableModel;
    selectable: boolean;
}
export declare class MdlSelectableTableComponent extends MdlTableComponent {
    model: IMdlTableModel;
    selected: IMdlTableModelItem[];
    selectionChange: EventEmitter<{}>;
    selectable: boolean;
    allSelected: boolean;
    isAllSelected(): boolean;
    protected toogleAll(): void;
    private updateSelected;
    protected selectionChanged(data: any): void;
}
