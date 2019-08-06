export const LOAD_BOOKS = "LOAD_BOOKS";

export const CREATE_OR_UPDATE_BOOK_ORDER = "CREATE_OR_UPDATE_BOOK_ORDER";

export const DELETE_BOOK_ORDER = "DELETE_BOOK_ORDER";

export interface Book {
    id: number;
    name: string;
    price: number;
    author: string;
    image: string
}

export interface State {
    books: Book[],
    orderBooks: Record<string, number>
}

export interface LoadBooksAction {
    type: typeof LOAD_BOOKS;
    payload: Book[]
}
export interface CreateOrUpdateBookOrderAction {
    type: typeof CREATE_OR_UPDATE_BOOK_ORDER;
    payload: {bookId: Book["id"], count: number}
}
export interface DeleteBookOrderAction {
    type: typeof DELETE_BOOK_ORDER;
    payload: Book["id"]
}

export type ActionTypes = LoadBooksAction | CreateOrUpdateBookOrderAction | DeleteBookOrderAction
