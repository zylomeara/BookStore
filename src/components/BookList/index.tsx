import * as React from "react";
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";

class BookList extends React.Component<{ books: any, bookstoreService: any }> {
    componentDidMount() {
        let {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();

        this.props.booksLoaded(data);
    }


    render() {
        let {books} = this.props;


        return (
            <ul>
                {
                    books.map((book) => <li key={book.id}>{book.id}</li>)
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => ({books});

const mapDispatchToProps = (dispatch) => {
    return {
        booksLoaded: (newBooks) => {
            dispatch({
                type: 'BOOKS_LOADED',
                payload: newBooks
            })
        }
    }
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));