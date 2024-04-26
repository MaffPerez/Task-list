import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class Login {
    user = new FormControl('');
    password = new FormControl('');

    form: FormGroup = new FormGroup({
        user: this.user,
        password: this.password
    });

    constructor() {
        this.addFormValidators();
    }

    private addFormValidators() {
        this.user.setValidators([
            Validators.required
        ]);

        this.password.setValidators([
            Validators.required
        ]);
    }
}