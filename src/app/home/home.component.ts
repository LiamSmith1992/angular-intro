import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }
  headername = "angular 14 Tutorial";
  colorName = "red";
  className = "headClass"

  colors = ['for', 'loop', 'is', 'working', 'red', 'green', 'yellow', 'pink']


  functionclick(name: string) {
    var info: string = "-------two way binding"
    alert(name + info)
  }


}
