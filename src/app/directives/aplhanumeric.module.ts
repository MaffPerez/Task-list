import { NgModule, Directive } from '@angular/core';
import { AlphanumericDirective } from "./alphanumeric.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AlphanumericDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlphanumericDirective
    ]
})

export class DirectiveModule { }