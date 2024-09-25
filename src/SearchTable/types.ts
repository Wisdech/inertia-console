import {PaginateData} from "../utils/types";
import {FormProps, TableColumnProps, TableProps} from "@arco-design/web-react";
import React from "react";

export type SearchColumnsProps = TableColumnProps & {
    hideInTable?: boolean;
    hideInSearch?: boolean;
    valueType?: 'text' | 'textarea' | 'select' | 'date' | 'datetime' | 'dateRange' | 'datetimeRange';
    fieldProps?: Record<string, any>;
};

export type SearchTableProps<T = any> = Omit<TableProps, 'data' | 'columns'> & {
    data: PaginateData;
    columns: SearchColumnsProps[];
    formProps?: FormProps<T>;
    actions?: React.ReactNode[];
    toolbar?: React.ReactNode[];
};
