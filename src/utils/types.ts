import { FormItemProps, FormProps, TableColumnProps, TableProps } from '@arco-design/web-react';
import React from 'react';

export type FormFieldProps<T = any> = T & {
  value?: any;
  onChange?: (value: any) => void;
};

export type PaginateData<T = any> = {
  data: T[];
  total: number;
  per_page: number;
  current_page: number;
  prev_page_url: string;
  next_page_url: string;
  links: { url: string; label: string; active: boolean }[];
};

export type FormErrors = Record<string, Pick<FormItemProps, 'help' | 'validateStatus'>>;

export type Schema = TableColumnProps & {
  hideInForm?: boolean;
  hideInInfo?: boolean;
  hideInTable?: boolean;
  hideInSearch?: boolean;
  valueType?: 'text' | 'textarea' | 'select' | 'date' | 'datetime' | 'dateRange' | 'datetimeRange';
  infoProps?: Record<string, any>;
  fieldProps?: Record<string, any>;
};

export type SearchTableProps<T = any> = Omit<TableProps, 'data' | 'columns'> & {
  data: PaginateData;
  columns: Schema[];
  formProps?: FormProps<T>;
  actions?: React.ReactNode[];
  toolbar?: React.ReactNode[];
};

export type NormalFormProps = FormProps & {
  columns?: Schema[];
  reset?: string;
  submit?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};
