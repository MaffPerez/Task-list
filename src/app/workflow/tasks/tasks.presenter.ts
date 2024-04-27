import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class TasksPresenter {
    taskDescription = new FormControl('');

    form: FormGroup = new FormGroup({
        taskDescription: this.taskDescription,
    });

    constructor() {
        this.addFormValidators();
    }

    private addFormValidators() {
        this.taskDescription.setValidators([
            Validators.required
        ]);
    }
}