import * as React from 'react';
const { useEffect } = React;
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import { Menu } from 'antd';
import { booksLoaded, BooksLoadedActionCreator } from '../../actions';
import withBookstoreService from '../hoc/with-bookstore-service';
import BookstoreService from '../../services/BookstoreService';

type InjectedDispatch = {
  booksLoaded: BooksLoadedActionCreator;
};

type Props = Pick<AppState, 'orderBooks'>
  & InjectedDispatch
  & { bookstoreService: BookstoreService }
  & { history: any };

const Header = ({ orderBooks, history, booksLoaded, bookstoreService }: Props) => {
  useEffect(() => {
    const request = bookstoreService.getBooks();

    request.then(data => booksLoaded(data));
  },        []);

  return <Menu
    mode={'horizontal'}
    theme={'dark'}
    selectedKeys={[history.location.pathname]}>
    <Menu.Item key={'/goods'}>
      <Link to={'/'}>Товары</Link>
    </Menu.Item>
    <Menu.Item
      key={'/cart'}
      disabled={Object.keys(orderBooks).length < 1}
    >
      <Link to={'/cart'}>Корзина</Link>
    </Menu.Item>
  </Menu>;
};

const mapStateToProps = ({ orderBooks }: AppState) => ({ orderBooks });

const mapDispatchToProps = { booksLoaded };

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(withBookstoreService()(Header)),
);
