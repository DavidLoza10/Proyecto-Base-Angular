import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-suma',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  sum:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  sumar(num1:number, num2:number){
    this.sum=num1+num2;
    console.log(this.sum);
  }
}
