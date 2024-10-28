import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements AfterViewInit {
  textarea: string = 'Descrição inicial';
  inputText: string = 'Texto inicial';
  select: string = '1';
  radioButton: string = "1";
  checkbox: boolean = true;


  @ViewChild('meuForm') form!: NgForm;

  onReset(form : NgForm){
    console.log(form.value)
  };

  ngAfterViewInit() {
    console.log(this.form.value)
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }

}
