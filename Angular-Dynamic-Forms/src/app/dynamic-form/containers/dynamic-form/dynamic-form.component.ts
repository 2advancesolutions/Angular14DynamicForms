
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';


@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  styleUrls: ['dynamic-form.component.scss'],
  templateUrl:'dynamic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: FieldConfig[] = [];

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup; 

  get controls() {
    return this.config;
  }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
    this.form.statusChanges
    .subscribe((val) => {
      if(val === "INVALID")
      for(const [key, value] of Object.entries(this.form.controls)) {
        if(value.status === 'INVALID') {
          this.getErrorMessage(value as FormControl, this.config.filter(c => c.name === key)[0])
        }
    }
    });
  }



  createGroup() {
    const group = this.fb.group({});
    this.controls?.forEach((control: any) => 
        group.addControl(control.name, this.createControl(control))
    )
    return group;
  }

  createControl(config: FieldConfig | undefined) {
    if(!config) return this.fb.control({});
    const { disabled, validators, value } = config;
      return this.fb.control({ disabled, value }, this.getValidators(validators))
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map((item: any) => {
      if (item.genericName === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, { emitEvent: true });
  }

  getValidators(validator: object) {
    const validators = []
      for(const[key, value] of Object.entries(validator)) {
          switch(key) {
            case 'required': 
              if(value) {
                validators.push(Validators.required)
              }
              break;
            case 'minLength': 
              validators.push(Validators.minLength(value))
              break;
            case 'maxLength': 
              validators.push(Validators.maxLength(value))
              break;
            case 'min': 
              validators.push(Validators.min(value))
              break;
            case 'max': 
              validators.push(Validators.max(value))
              break;
            case 'email': 
            if(value) {
              validators.push(Validators.email)
            }
                
          }
      }
      return validators
  }


  getErrorMessage(control: FormControl, config: any) {
    let message = ""
    if(control?.hasError('required')) {
      message = 'You must enter a value'
      if(config?.errors && config.errors.filter(((item: any) => item[config.name] === message)).length === 0) {
        config.errors.push({[config.name]:message})
      }  
    }

    if(control?.hasError('minlength')) {
      message = `It must have minimum ${config?.validators['minLength']} characters`
      if(config?.errors && config.errors.filter(((item: any) => item[config.name] === message)).length === 0) {
        config.errors.push({[config.name]:message})
      }  
    }

    if(control?.hasError('maxlength')) {
      message = `It must have maximum ${config?.validators['minLength']} characters`
      if(config?.errors && config.errors.filter(((item: any) => item[config.name] === message)).length === 0) {
        config.errors.push({[config.name]:message})
      } 
    }

    if(control?.hasError('email')) {
      message = `It must be valid email`
      if(config?.errors && config.errors.filter(((item: any) => item[config.name] === message)).length === 0) {
        config.errors.push({[config.name]:message})
      } 
    }

    if(control?.hasError('max')) {
      message = `It must be number smaller then ${config?.validators.max}`
      if(config?.errors && config.errors.filter(((item: any) => item[config.name] === message)).length === 0) {
        config.errors.push({[config.name]:message})
      } 
    }

    if(control?.hasError('min')) {
      message = `It must be number bigger then ${config?.validators.min}`
      if(config?.errors && config.errors.filter(((item: any) => item[config.name] === message)).length === 0) {
        config.errors.push({[config.name]:message})
      } 
    }
  }


}

