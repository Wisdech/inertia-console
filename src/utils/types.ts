import { FormItemProps, FormProps, TableColumnProps, TableProps } from '@arco-design/web-react';
import React from 'react';

export type Props = Record<string, any>;

export type Model<IDType = number> = {
  id: IDType;
} & Props;

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

export type Schema<T> = TableColumnProps<T> & {
  hideInForm?: boolean;
  hideInInfo?: boolean;
  hideInTable?: boolean;
  hideInSearch?: boolean;
  valueType?: 'text' | 'textarea' | 'select' | 'date' | 'datetime' | 'dateRange' | 'datetimeRange';
  infoProps?: Props;
  fieldProps?: Props;
};

export type SearchTableProps<T = Model> = Omit<TableProps<T>, 'data' | 'columns'> & {
  data: PaginateData;
  columns: Schema<T>[];
  formProps?: FormProps<T>;
  actions?: React.ReactNode[];
  toolbar?: React.ReactNode[];
};

export type NormalFormProps<T = Model> = FormProps<T> & {
  columns?: Schema<T>[];
  reset?: string;
  submit?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};
