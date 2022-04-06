import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  sum=0;
  displayName=true;

  constructor() { }



  ngOnInit(): void {
  }

  toggle()
  {
    this.sum++;
    if (this.sum%2==1)
    {
      this.displayName=true;
    }
    else
    {
      this.displayName=false;
    }
    console.log(this.sum);
    
  }

}
