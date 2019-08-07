import * as React from 'react';
import { connect } from 'react-redux';
import {
  cancelBookOrder,
  orderBook,
  DeleteBookOrderActionCreator,
  CreateOrUpdateBookOrderActionCreator,
} from '../../actions';
import BookListItem from './BookListItem';
import { AppState } from '../../reducers';
import './style.scss';

type InjectedDispatch = {
  cancelBookOrder: DeleteBookOrderActionCreator;
  orderBook: CreateOrUpdateBookOrderActionCreator;
};

type Props = Pick<AppState, 'books' | 'orderBooks'>
  & InjectedDispatch;

const BookList = ({ books, orderBooks, cancelBookOrder, orderBook }: Props) =>
  <div className={'BookList'}>
    {
      books.map(item =>
        <BookListItem
          key={item.id}
          bookData={item}
          onDelete={cancelBookOrder}
          onAdd={orderBook}
          isOrdered={Object.keys(orderBooks).includes(String(item.id))}
        />,
      )
    }
  </div>;

const mapStateToProps = ({ books, orderBooks }: AppState) => ({ books, orderBooks });

const mapDispatchToProps = { orderBook, cancelBookOrder };

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
