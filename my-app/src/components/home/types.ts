export interface IProductItem {
    // Поля що має продукт
    id: number,
    name: string,
    detail: string
}

export interface IProductResponse {
    data: Array<IProductItem>,
    current_page: number,
    total: number,
    last_page: number
}

export interface IProductState {
    list: Array<IProductItem>,
    current_page: number,
    total: number,
    count_page: number
}

export enum ProductActionTypes {
    GET_PRODUCTS = "GET_PRODUCTS_ACTION" // Назва дії
}

export interface GetProductAction {  // Дія для оновлення списку товарів
    type: ProductActionTypes.GET_PRODUCTS,
    payload: IProductState
}

//Список дії, які можна виконати над продуктами
export type ProdutActions = | GetProductAction