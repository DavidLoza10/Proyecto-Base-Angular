import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-resta',
  templateUrl: './formulario-resta.component.html',
  styleUrls: ['./formulario-resta.component.css']
})
export class FormularioRestaComponent implements OnInit {

  res:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  resta(num1:number,num2:number){
    this.res=num1-num2;
    console.log(this.res);
  }
}
