import { ComponentFactoryResolver, ModuleWithProviders } from '@angular/core';
import { MdlDialogOutletService } from '../dialog-outlet/mdl-dialog-outlet.service';
import { Observable } from 'rxjs';
export declare class MdlSnackbarComponent {
    message: string;
    actionText: string;
    showIt: boolean;
    onAction: () => void;
    constructor();
    onClick(): void;
    isActive(): boolean;
    show(): Observable<void>;
    hide(): Observable<void>;
}
export interface IMdlSnackbarMessage {
    message: string;
    timeout?: number;
    closeAfterTimeout?: boolean;
    action?: {
        handler: () => void;
        text: string;
    };
}
export declare class MdlSnackbarService {
    private componentFactoryResolver;
    private dialogOutletService;
    private cFactory;
    private previousSnack;
    constructor(componentFactoryResolver: ComponentFactoryResolver, dialogOutletService: MdlDialogOutletService);
    showToast(message: string, timeout?: number): Observable<MdlSnackbarComponent>;
    showSnackbar(snackbarMessage: IMdlSnackbarMessage): Observable<MdlSnackbarComponent>;
    private hideAndDestroySnack;
}
export declare class MdlSnackbarModule {
    static forRoot(): ModuleWithProviders;
}
