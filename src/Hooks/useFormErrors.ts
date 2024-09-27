import { usePage } from '@inertiajs/react';
import { FormErrors } from '../utils/types';

export default function useFormErrors(...fields: string[]): FormErrors {
  const { errors } = usePage().props;

  const formErrors: FormErrors = {};

  fields.forEach((field) => {
    formErrors[field] = errors[field] && { help: errors[field], validateStatus: 'error' };
  });

  return formErrors;
}
