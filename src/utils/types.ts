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