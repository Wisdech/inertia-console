import { SearchColumnsProps } from './types';


export function renderColumns(columns: SearchColumnsProps[], visible: (string | undefined)[]) {
    return columns.filter((c) => visible.includes(c.dataIndex) || !c.dataIndex);
}
