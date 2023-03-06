import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }
  headername = "angular 14 Tutorial"


  functionclick(name: string) {
    alert(name)
  }


}
