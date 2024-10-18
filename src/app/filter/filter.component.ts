import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

 
  @Input() All: number = 0;
  @Input() Free : number = 0 ;
  @Input() Premium : number = 0;

  selectedRadioButtonValue : string = 'All';

  @Output()
  filterRadioButtonSelectionChanges : EventEmitter <string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged(){
    
    
    this.filterRadioButtonSelectionChanges.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue)
  }

}
