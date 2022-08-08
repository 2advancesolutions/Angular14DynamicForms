import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'allpaid-liferay-angular-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent implements OnInit {
  @Input() config: any;
  group!: any;
  control: any;

  constructor() {
   }

  ngOnInit() {
    this.control = this.options;
  }

  get options() {
   return this.group.get('checkbox');
  }

  patchForm(event:MatCheckboxChange, index: number): void {
    const ctrl = this.control.controls[index];
    if(!event.checked) {
      ctrl.setErrors({'incorrect': true});
    } else{
      this.control.controls.setErrors(null);
    }
  }
}
