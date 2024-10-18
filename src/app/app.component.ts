import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DemoworkComponent } from './demowork/demowork.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent, CommonModule,CustomerListComponent,DemoComponent,DemoworkComponent ,SearchComponent,HeaderComponent, CoursesComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-helloworld';

  @ViewChild('dobInput') dateOfBirth : ElementRef | undefined;
  @ViewChild('ageInput') age : ElementRef | undefined;
  @ViewChild(DemoComponent, {static:true}) demComp: DemoComponent | undefined;

  calculateAge(){

    let birthYaer = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYaer = new Date().getFullYear();
    let age = currentYaer - birthYaer;
    if(this.age){
      this.age.nativeElement.value = age
    }

  }
}
