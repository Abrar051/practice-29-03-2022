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

  public employees = [
    {"id":1, "name": "Andrew" , "age":30},
    {"id":2, "name": "Brandon" , "age":25},
    {"id":3, "name": "Christine" , "age":26},
    {"id":4, "name": "Elena" , "age":20}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  add()
  {
    this.result= parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }

}
