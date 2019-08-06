import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AppState} from "../../reducers";
import {Menu} from "antd";
import {withRouter} from "react-router-dom";
import {useEffect} from "react";
import {booksLoaded} from "../../actions";
import withBookstoreService from "../hoc/with-bookstore-service";
import {BooksLoadedActionCreator} from "../../actions";
import BookstoreService from "../../services/bookstore-service";

type InjectedDispatch = {
    booksLoaded: BooksLoadedActionCreator;
}

type Props = Pick<AppState, "orderBooks">
    & InjectedDispatch
    & { bookstoreService: BookstoreService }
    & { history: any }

const Header = ({orderBooks, history, booksLoaded, bookstoreService}: Props) => {
    useEffect(() => {
        const data = bookstoreService.getBooks();

        booksLoaded(data);
    }, []);

    return <Menu
        mode={"horizontal"}
        theme={"dark"}
        selectedKeys={[history.location.pathname]}>
        <Menu.Item key={"/goods"}>
            <Link to={"/"}>Товары</Link>
        </Menu.Item>
        <Menu.Item
            key={"/cart"}
            disabled={Object.keys(orderBooks).length < 1}
        >
            <Link to={"/cart"}>Корзина</Link>
        </Menu.Item>
    </Menu>
};

const mapStateToProps = ({orderBooks}: AppState) => ({orderBooks});

const mapDispatchToProps = {booksLoaded};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withBookstoreService()(Header)));