import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { FormComponent } from './components/form/form.component';
import { NgModelGroupComponent } from './components/ng-model-group/ng-model-group.component';
import { FormProfessionComponent } from './components/form-with-children/form-profession/form-profession.component';
import { FormUserComponent } from './components/form-with-children/form-user/form-user.component';
import { MainFormComponent } from './components/form-with-children/main-form/main-form.component';
import { CustomValidatorFormEx1Component } from './customValidators/synchronous/ex1/custom-validator-form-ex1/custom-validator-form-ex1.component';
import { InvalidTextValidatorDirective } from './customValidators/synchronous/ex1/directives/invalid-text-validator.directive';
import { CustomValidatorFormEx2Component } from './customValidators/synchronous/ex2/custom-validator-form-ex2/custom-validator-form-ex2.component';
import { DepartmentQuantityValidadorDirective } from './customValidators/synchronous/ex2/directives/department-quantity-validador.directive';
import { HttpClientModule } from '@angular/common/http';
import { UserNameValidatorDirective } from './customValidators/asynchronus/directives/user-name-validator.directive';
import { AsyncCustomValidatorComponent } from './customValidators/asynchronus/async-custom-validator/async-custom-validator.component';
@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    TextareaComponent,
    SelectComponent,
    RadioButtonComponent,
    FormComponent,
    NgModelGroupComponent,
    FormProfessionComponent,
    FormUserComponent,
    MainFormComponent,
    CustomValidatorFormEx1Component,
    InvalidTextValidatorDirective,
    CustomValidatorFormEx2Component,
    DepartmentQuantityValidadorDirective,
    UserNameValidatorDirective,
    AsyncCustomValidatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
