import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements AfterViewInit {

  @ViewChild('meuInputFormControl') inputEl!: NgModel;


  ngAfterViewInit() {
    console.log(this.inputEl)
  }
}
