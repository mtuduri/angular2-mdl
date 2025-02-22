import { ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MdlDialogReference } from './mdl-dialog.service';
import { IMdlDialogConfiguration } from './mdl-dialog-configuration';
/**
 * Internal representation of the dialog ref. the service
 * user should not have access to the created components
 * and internal implementations.
 */
export declare class InternalMdlDialogReference {
    config: IMdlDialogConfiguration;
    hostDialogComponentRef: ComponentRef<any>;
    private onHideSubject;
    private onVisibleSubject;
    closeCallback: () => void;
    isModal: boolean;
    dialogRef: MdlDialogReference;
    constructor(config: IMdlDialogConfiguration);
    readonly hostDialog: any;
    hide(data?: any): void;
    visible(): void;
    onHide(): Observable<any>;
    onVisible(): Observable<void>;
}
