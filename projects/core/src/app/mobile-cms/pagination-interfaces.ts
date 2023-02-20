export interface PaginationAppInfoList {
    limit: number;
    offset: number;
    count: number;
    sort?: string;
    order?: string;
    searchBy?: string;
}