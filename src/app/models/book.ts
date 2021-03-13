export interface IBookModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    createDate: number;
    isAvailable: boolean;
}

export enum Category {
    Science,
    History,
    Fantasy,
    Novel,
}
