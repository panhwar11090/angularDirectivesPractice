import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  // imports: [FormsModule,CommonModule, FilterComponent, SearchComponent],
  imports: [CommonModule, FormsModule, FilterComponent, SearchComponent],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'] 
})
export class CoursesComponent {

  courses = [
    { id:101, name:'JavaScript for beginners', author: 'John Heikela', duration: 48, type: 'Free', 
      price: 0.00, ratings: 3.5, image:'assets/courses/course-image-1.jpeg',
      description: 'In this course you will learn the fundamentals of JavaScript. This course is purely designed for beginners and teaches you all the concepts of javascript step by step'
    },
    { id:102, name:'Angular for beginners', author: 'Mark Vought', duration: 28, type: 'Premium', 
      price: 129.00, ratings: 4.5, image:'assets/courses/course-image-2.jpeg',
      description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'
    },
    { id:103, name:'React for beginners', author: 'Steve Smith', duration: 18.5, type: 'Free', 
      price: 0.00, ratings: 4.0, image:'assets/courses/course-image-3.jpeg',
      description: 'In this course you will learn the fundamentals of React. This course is purely designed for beginners and teaches you all the basic concepts of React step by step'
    },
    { id:104, name:'Advance Angular Course', author: 'Steve Smith', duration: 19.5, type: 'Premium', 
      price: 145.50, ratings: 4.8, image:'assets/courses/course-image-4.jpeg',
      description: 'In this course you will learn all the concepts of Angular from basic to advance. This course will start teaching you from basics of Angular and as you progress, you will learn all the advance concepts.'
    },
    { id:105, name:'Advance JavaScript Course', author: 'John Heikela', duration: 60, type: 'Premium', 
      price: 150.00, ratings: 4.5, image:'assets/courses/course-image-5.jpeg',
      description: 'In this course you will learn the complete modern JavaScript step by step. This course is purely designed for beginners and teaches you all the concepts of javascript from beginner to advance level.'
    },
    { id:106, name:'Angular with .NET Core', author: 'Mark Vought', duration: 68, type: 'Premium', 
      price: 129.00, ratings: 4.5, image:'assets/courses/course-image-6.jpeg',
      description: 'In this course you will learn the fundamentals of Angular framework with .NET Core. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step and how to use it with back-end framework like .NET Core.'
    },
    { id:107, name:'Advance React Course', author: 'Merry Smith', duration: 18.5, type: 'Free', 
      price: 0.00, ratings: 4.0, image:'assets/courses/course-image-7.jpeg',
      description: 'In this course you will learn the fundamentals and advance concepts of React. This course is purely designed for beginners and teaches you all the concepts of React step by step'
    },
    { id:108, name:'UX Design Course', author: 'Steve Smith', duration: 19.0, type: 'Premium', 
      price: 115.50, ratings: 4.8, image:'assets/courses/course-image-8.jpeg',
      description: 'In this course you will learn about reactive web development using HTML & CSS. This course will start teaching you from basics of HTML & CSS and as you progress, you will learn all the advance concepts.'
    },
    { id:109, name:'UX Design Course: Advance', author: 'Steve Smith', duration: 20.0, type: 'Premium', 
      price: 115.50, ratings: 4.8, image:'assets/courses/course-image-9.jpeg',
      description: 'In this course you will learn about reactive web development using HTML & CSS. This course will start teaching you from basics of HTML & CSS and as you progress, you will learn all the advance concepts.'
    }
  ]

  getTotalCourses(){
    return this.courses.length;
  }
  getTotalFreeCourses(){
    return this.courses.filter(course => course.type === 'Free').length;
  }
  getTotalPremiumCourses(){
    return this.courses.filter(course => course.type === 'Premium').length;
  }

  courseCountRadioButton: string = 'All';

  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton= data;
    console.log(this.courseCountRadioButton);
  }

  searchText : string = '';

  onSearchTextchanged(data: string){
    this.searchText = data;
    console.log(this.searchText)
  }

}
