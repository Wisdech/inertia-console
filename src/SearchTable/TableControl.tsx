import { Button, Card, Checkbox } from '@arco-design/web-react';
import { IconSettings } from '@arco-design/web-react/icon';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import React from 'react';
import { FormFieldProps, Schema } from '../utils/types';

export function TableControl<T>({ columns, value, onChange }: FormFieldProps & { columns: Schema<T>[] }) {
  const options = (columns as Schema<T>[])
    .filter((column) => column.dataIndex)
    .map((column) => ({
      label: `${column.title}`,
      value: `${column.dataIndex}`,
    }));

  return (
    <Popover className="relative">
      <PopoverButton as="div">
        <Button icon={<IconSettings />} />
      </PopoverButton>
      <PopoverPanel anchor="bottom end" className="mt-2 flex flex-col shadow-lg">
        <Card size="small">
          <Checkbox.Group direction="vertical" options={options} value={value} onChange={onChange} />
        </Card>
      </PopoverPanel>
    </Popover>
  );
}
