import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name ="Febin";
  course="Full Stack Development"
  active="false"
  constructor(){
    setTimeout(()=>{
      this.active=true;
    },10000);
    


  }

}
