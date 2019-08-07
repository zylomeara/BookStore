import { createSelector } from 'reselect';
import { AppState } from '../../reducers';

const getBooks = (state: AppState) => state.books;
const getOrderBooks = (state: AppState) => state.orderBooks;

export const getCost = createSelector(
  [getBooks, getOrderBooks],
  (books, orderBooks) =>
    Object.entries(orderBooks)
      .reduce((acc, [id, count]) => {
        const foundBook = books.find(book => book.id === +id);

        if (!foundBook) {
          return acc;
        }

        return acc + foundBook.price * count;
      },      0),
);
