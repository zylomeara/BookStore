import * as React from "react";
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import {booksLoaded, cancelBookOrder, orderBook} from "../../actions";
import BookListItem from "./BookListItem";
import {AppState} from "../../reducers";

type InjectedDispatch = {
    booksLoaded: import('../../actions').BooksLoadedActionCreator;
    cancelBookOrder: import('../../actions').DeleteBookOrderActionCreator;
    orderBook: import('../../actions').CreateOrUpdateBookOrderActionCreator;
}

type Props = Pick<AppState, 'books' | 'orderBooks'>
    & {bookstoreService: import('../../services/bookstore-service').default}
    & InjectedDispatch

class BookList extends React.Component<Props> {
    componentDidMount() {
        let {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();

        this.props.booksLoaded(data);
    }


    render() {
        let {books, orderBooks} = this.props;

        return (
            books.map(item =>
                <BookListItem
                    key={item.id}
                    bookData={item}
                    onDelete={this.props.cancelBookOrder}
                    onAdd={this.props.orderBook}
                    isOrdered={Object.keys(orderBooks).includes('' + item.id)}
                />
            )
        )
    }
}


const mapStateToProps = ({books, orderBooks}: AppState) => ({books, orderBooks});

const mapDispatchToProps = {booksLoaded, orderBook, cancelBookOrder};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList)
);