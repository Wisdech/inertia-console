import { DatePicker, Input, Select } from '@arco-design/web-react';
import React from 'react';
import { FormFieldProps, Schema } from '../utils/types';

export function FormRender<T>({ value, onChange, fieldProps, ...props }: FormFieldProps<Schema<T>>) {
  switch (props.valueType) {
    case 'date':
      return (
        <DatePicker
          allowClear
          showTime={true}
          value={value}
          onChange={onChange}
          {...fieldProps}
          style={{ width: '100%' }}
          placeholder="请选择日期"
        />
      );
    case 'datetime':
      return (
        <DatePicker
          allowClear
          showTime={true}
          value={value}
          onChange={onChange}
          {...fieldProps}
          style={{ width: '100%' }}
          placeholder="请选择日期和时间"
        />
      );
    case 'dateRange':
      return (
        <DatePicker.RangePicker
          allowClear
          showTime={true}
          value={value}
          onChange={onChange}
          {...fieldProps}
          placeholder={['开始日期', '结束日期']}
        />
      );
    case 'datetimeRange':
      return (
        <DatePicker.RangePicker
          allowClear
          showTime={true}
          value={value}
          onChange={onChange}
          {...fieldProps}
          placeholder={['开始日期和时间', '结束日期和时间']}
        />
      );
    case 'select':
      return (
        <Select
          allowClear
          value={value}
          onChange={onChange}
          {...fieldProps}
          placeholder={fieldProps?.placeholder ?? '请选择'}
        />
      );
    case 'textarea':
      return (
        <Input.TextArea
          allowClear
          value={value}
          onChange={onChange}
          {...fieldProps}
          placeholder={fieldProps?.placeholder ?? '请输入'}
        />
      );
    default:
      return (
        <Input
          allowClear
          value={value}
          onChange={onChange}
          {...fieldProps}
          placeholder={fieldProps?.placeholder ?? '请输入'}
        />
      );
  }
}
