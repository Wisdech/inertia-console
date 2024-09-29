import { Form } from '@arco-design/web-react';
import { usePage } from '@inertiajs/react';
import { FormErrors, NormalFormProps } from '../utils/types';

export function useFormInstance() {
  const [form] = Form.useForm() as unknown as [NormalFormProps['form']];

  return form;
}

export function useFormErrors(...fields: string[]): FormErrors {
  const { errors } = usePage().props;

  const formErrors: FormErrors = {};

  fields.forEach((field) => {
    formErrors[field] = errors[field] && { help: errors[field], validateStatus: 'error' };
  });

  return formErrors;
}
