import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function mustMatchValidator(password: string, confirmPassword: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        const passwordControl = control.get(password);
        const confirmPasswordControl = control.get(confirmPassword);

        if(confirmPasswordControl?.errors && !confirmPasswordControl.errors['passwordConfirmPasswordNotMatched']){
            return null;
        }

        if (passwordControl?.value !== confirmPasswordControl?.value) {
            confirmPasswordControl?.setErrors({ passwordConfirmPasswordNotMatched: true });
        }
        else {
            confirmPasswordControl?.setErrors(null);
        }
        return null;
    };

}