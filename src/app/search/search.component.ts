import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CoursesComponent } from '../courses/courses.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent, FormsModule, ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
