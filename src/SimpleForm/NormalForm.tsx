import { Button, Form } from '@arco-design/web-react';
import React from 'react';
import useFormErrors from '../Hooks/useFormErrors';
import { FormRender } from '../Schema/Render';
import { FormErrors, NormalFormProps } from '../utils/types';

export function NormalForm({ columns = [], submit = '提交', footer, children, ...props }: NormalFormProps) {
  const errors = useFormErrors(...columns?.filter((c) => !!c.dataIndex).map((c) => c.dataIndex!)) as FormErrors;

  return (
    <Form layout="vertical" requiredSymbol={false} {...props}>
      {columns
        .filter((c) => c.dataIndex)
        .map((column) => (
          <Form.Item
            key={column.dataIndex}
            label={column.title}
            field={column.dataIndex}
            {...errors[`${column.dataIndex}`]}
          >
            <FormRender {...column} />
          </Form.Item>
        ))}
      {children}
      <Form.Item>
        {footer ?? (
          <Button type="primary" htmlType="submit">
            {submit}
          </Button>
        )}
      </Form.Item>
    </Form>
  );
}
