import { Component, Input, } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl:'form-input.component.html' 
})
export class FormInputComponent {
  @Input() config: any;
  group!: FormGroup;

  clearFormGroup(config: any):void {
    this.group.reset();
  }

}


