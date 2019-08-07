import { Book, CreateOrUpdateBookOrderAction } from '../constants/ActionTypes';

export const booksLoaded = (newBooks: Book[]) => ({
  type: 'LOAD_BOOKS',
  payload: newBooks,
});
export const orderBook = (data: CreateOrUpdateBookOrderAction['payload']) => ({
  type: 'CREATE_OR_UPDATE_BOOK_ORDER',
  payload: data,
});
export const cancelBookOrder = (id: number) => ({
  type: 'DELETE_BOOK_ORDER',
  payload: id,
});

export type BooksLoadedActionCreator = typeof booksLoaded;
export type CreateOrUpdateBookOrderActionCreator = typeof orderBook;
export type DeleteBookOrderActionCreator = typeof cancelBookOrder;
