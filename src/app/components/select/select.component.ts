import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  nationalitySelected: number|undefined;
  nationalities: {id:number; description: string}[]=[
    {
      id:1,
      description:"Brasileira"
    },
    {
      id:2,
      description:"Argentina"
    },
    {
      id:3,
      description:"Espanhola"
    },
    {
      id:4,
      description:"Paraguaia"
    },
  ];

  onChange(nationality: string){
    
  }
}
