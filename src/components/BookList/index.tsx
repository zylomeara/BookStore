import * as React from "react";
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import {booksLoaded, cancelBookOrder, orderBook} from "../../actions";
import BookListItem from "./BookListItem";


class BookList extends React.Component<{ books: any, bookstoreService: any }> {
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


const mapStateToProps = ({books, orderBooks}) => ({books, orderBooks});

const mapDispatchToProps = {booksLoaded, orderBook, cancelBookOrder};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList)
);