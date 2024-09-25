import { Table, TableProps } from '@arco-design/web-react';
import { router } from '@inertiajs/react';
import { PaginateData } from '../utils/types';
import React from 'react';

type PaginationProps = Omit<TableProps, 'data'> & {
    data: PaginateData;
};

export default function SimpleTable({ data, ...props }: PaginationProps) {
    return (
        <Table
            rowKey="id"
            data={data.data}
            className="min-w-[70rem]"
            {...props}
            pagination={
                typeof props.pagination === 'boolean'
                    ? props.pagination
                    : {
                          total: data.total,
                          current: data.current_page,
                          pageSize: data.per_page,
                          showTotal: true,
                          sizeCanChange: true,
                          defaultPageSize: 15,
                          sizeOptions: [5, 15, 25, 50, 100, 250, 500],
                          onChange: (pageNumber, pageSize) => {
                              router.get(data.links[pageNumber].url, { pageSize });
                          },
                          ...props.pagination,
                      }
            }
        />
    );
}
