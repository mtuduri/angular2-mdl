import { ElementRef, EventEmitter, Renderer2, OnInit, OnDestroy, ModuleWithProviders } from '@angular/core';
import { ControlValueAccessor, FormGroupName } from '@angular/forms';
export declare class MdlRadioGroupRegisty {
    private defaultFormGroup;
    private radioComponents;
    add(radioComponent: MdlRadioComponent, formGroupName: FormGroupName): void;
    remove(radioComponent: MdlRadioComponent): void;
    select(radioComponent: MdlRadioComponent, formGroupName: FormGroupName): void;
}
export declare class MdlRadioComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private radioGroupRegistry;
    private formGroupName;
    name: string;
    formControlName: string;
    value: any;
    private _disabled;
    disabled: boolean;
    tabindex: any;
    change: EventEmitter<any>;
    optionValue: any;
    checked: boolean;
    private el;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(elementRef: ElementRef, renderer: Renderer2, radioGroupRegistry: MdlRadioGroupRegisty, formGroupName: FormGroupName);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(optionValue: any): void;
    deselect(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onFocus(): void;
    onBlur(): void;
    onClick(): void;
    private updateCheckState;
    private checkName;
    private throwNameError;
    spaceKeyPress(event: any): void;
}
export declare class MdlRadioModule {
    static forRoot(): ModuleWithProviders;
}
