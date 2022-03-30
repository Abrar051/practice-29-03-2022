import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formbasic',
  templateUrl: './formbasic.component.html',
  styleUrls: ['./formbasic.component.css']
})
export class FormbasicComponent implements OnInit {

  public name = "Codeevolution";
  firstNumber:any;
  secondNumber:any;
  result:any;
  public person = {
    "firstName":"John",
    "lastName":"Doe"
  }

  constructor() { }

  ngOnInit(): void {
  }

  add()
  {
    this.result= parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }

}
