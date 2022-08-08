export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  order: number,
  options?: any[],
  placeholder?: string,
  postion?: 'horzontial' | 'vertical';
  errors?: Array<any>,
  type: 'text' | 'number' | 'select' | 'email' | 'textarea' | 'password' | 'date' | 'payment' | 'checkbox',
  element: 'input' | 'select' | 'button' | 'textarea' | 'checkbox',
  value?: any,
  validators: object
}