import { Renderer2, ElementRef, ModuleWithProviders } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class MdlSliderComponent implements ControlValueAccessor {
    private renderer;
    private elRef;
    private value_;
    min: number;
    max: number;
    step: number;
    lowerEl: ElementRef;
    upperEl: ElementRef;
    inputEl: ElementRef;
    private _disabled;
    disabled: boolean;
    constructor(renderer: Renderer2, elRef: ElementRef);
    value: any;
    writeValue(value: number): void;
    private onTouchedCallback;
    private onChangeCallback;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    private updateSliderUI;
    onMouseUp(event: any): void;
    onMouseDown(event: MouseEvent): void;
}
export declare class MdlSliderModule {
    static forRoot(): ModuleWithProviders;
}
