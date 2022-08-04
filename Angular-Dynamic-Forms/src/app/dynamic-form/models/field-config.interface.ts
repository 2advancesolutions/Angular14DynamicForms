export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  options?: string[],
  placeholder?: string,
  errors?: Array<any>,
  type: 'text' | 'number' | 'select' | 'email' | 'textarea' | 'password' | 'date',
  element: 'input' | 'select' | 'button' | 'textarea',
  value?: any,
  validators: object
}