import { Form } from '@arco-design/web-react';
import { NormalFormProps } from '../utils/types';

export function useFormInstance() {
  const [form] = Form.useForm() as unknown as [NormalFormProps['form']];

  return form;
}
