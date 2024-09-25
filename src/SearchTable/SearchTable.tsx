import { Button, Form, Grid, Space } from '@arco-design/web-react';
import { IconRefresh, IconSearch } from '@arco-design/web-react/icon';
import { router } from '@inertiajs/react';
import { getQs, setQs } from '@wisdech/tsutils';
import { clsx } from 'clsx';
import { FieldRender } from './FieldRender';
import SimpleTable from './SimpleTable';
import styles from './styles.module.css';
import { SearchTableProps } from './types';
import React from 'react';

function SearchForm<T = any>({ columns, formProps }: SearchTableProps<T>) {
    const [form] = Form.useForm<T>();

    const inline = columns.length && columns.length <= 3;
    const vSmall = columns.length > 3 && columns.length <= 6;
    const vLarge = columns.length > 6;

    const actionStyle = clsx(
        styles['search-table-action'],
        inline && styles['search-table-action-inline'],
        vSmall && styles['search-table-action-vsmall'],
        vLarge && styles['search-table-action-vlarge'],
    );

    function submit() {
        const values = form.getFieldsValue();
        router.get(setQs(values, true));
    }

    function clear() {
        form.clearFields();
        const values = form.getFieldsValue();
        router.get(setQs(values, true));
    }

    return (
        <div className={styles['search-table-wrapper']}>
            <Form<T>
                form={form}
                labelAlign="left"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 19 }}
                className={styles['search-table-form']}
                initialValues={getQs() as Partial<T>}
                {...formProps}
            >
                <Grid.Row gutter={{ xs: 12, sm: 12, xl: 12, xxl: 48 }}>
                    {columns?.map((column) => (
                        <Grid.Col key={column.dataIndex} span={8}>
                            <Form.Item label={column.title} field={column.dataIndex}>
                                <FieldRender {...column} />
                            </Form.Item>
                        </Grid.Col>
                    ))}
                </Grid.Row>
            </Form>
            <div className={actionStyle}>
                <Button type="primary" icon={<IconSearch />} onClick={submit}>
                    搜索
                </Button>
                <Button icon={<IconRefresh />} onClick={clear}>
                    重置
                </Button>
            </div>
        </div>
    );
}

export function SearchTable({ columns, actions, toolbar, ...props }: SearchTableProps) {
    const tableColumns = columns.filter((c) => !c.hideInTable);
    const searchColumns = columns.filter((c) => !c.hideInSearch);

    return (
        <Space direction="vertical" className="w-full max-w-full overflow-x-auto overflow-y-hidden">
            <SearchForm {...props} columns={searchColumns} />
            {(actions || toolbar) && (
                <div className="-mt-2 mb-4 flex items-center justify-between">
                    <Space>{actions}</Space>
                    <Space>{toolbar}</Space>
                </div>
            )}
            <SimpleTable borderCell {...props} columns={tableColumns} />
        </Space>
    );
}
