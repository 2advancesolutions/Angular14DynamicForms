import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './components/form-input/form-input.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormCheckboxComponent } from './components/dynamic-field/form-checkbox/form-checkbox.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [
    DynamicFormComponent,
    FormInputComponent,
    FormSelectComponent,
    DynamicFieldDirective,
    FormCheckboxComponent,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
  ],
})
export class DynamicFormModule { }