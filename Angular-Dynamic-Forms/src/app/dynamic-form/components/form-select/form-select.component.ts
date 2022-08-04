
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-select',
  templateUrl: 'form-select.component.html'
})
export class FormSelectComponent implements Field {
  config!: FieldConfig;
  group!: FormGroup;

  compareFn: ((f1: any, f2: any) => boolean) = this.compareByValue;

  compareByValue(f1: any, f2: any) {
    return f2 && true;
  }


}