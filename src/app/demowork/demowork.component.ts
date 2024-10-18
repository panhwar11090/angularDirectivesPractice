import { Component } from '@angular/core';

@Component({
  selector: 'app-demowork',
  standalone: true,
  imports: [],
  templateUrl: './demowork.component.html',
  styleUrl: './demowork.component.css'
})
export class DemoworkComponent {

  sayHello(){
    console.log('hello');
  }
}
