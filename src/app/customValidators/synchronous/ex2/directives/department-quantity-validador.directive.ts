import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { InvalidTextValidatorDirective } from '../../ex1/directives/invalid-text-validator.directive';

@Directive({
  selector: '[appDepartmentQuantityValidador]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: DepartmentQuantityValidadorDirective,
    multi: true
  }]
})
export class DepartmentQuantityValidadorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if(control.value.departamento === 'IT' && +control.value.quantidade > 10){
      return {'invalidITQuantity': true}
    }
    if(control.value.departamento === 'HR' && +control.value.quantidade > 20){
      return {'invalidHRQuantity': true}
    }
    return null
  }

}
