import {Book, CreateOrUpdateBookOrderAction} from "../constants/ActionTypes";

export const booksLoaded = (newBooks: Book[]) => {
    return {
        type: "LOAD_BOOKS",
        payload: newBooks
    }
};
export const orderBook = (data: CreateOrUpdateBookOrderAction["payload"]) => {
    return {
        type: "CREATE_OR_UPDATE_BOOK_ORDER",
        payload: data
    }
};
export const cancelBookOrder = (id: number) => {
    return {
        type: "DELETE_BOOK_ORDER",
        payload: id
    }
};

export type BooksLoadedActionCreator = typeof booksLoaded;
export type CreateOrUpdateBookOrderActionCreator = typeof orderBook;
export type DeleteBookOrderActionCreator = typeof cancelBookOrder;