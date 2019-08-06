import * as React from "react";
import {connect} from "react-redux";
import {cancelBookOrder, orderBook} from "../../actions";
import BookListItem from "./BookListItem";
import {AppState} from "../../reducers";
import {DeleteBookOrderActionCreator, CreateOrUpdateBookOrderActionCreator} from "../../actions";
import "./style.less";

type InjectedDispatch = {
    cancelBookOrder: DeleteBookOrderActionCreator;
    orderBook: CreateOrUpdateBookOrderActionCreator;
}

type Props = Pick<AppState, "books" | "orderBooks">
    & InjectedDispatch

function BookList(props: Props) {
    let {books, orderBooks} = props;

    return (
        <div className={"BookList"}>
            {
                books.map(item =>
                    <BookListItem
                        key={item.id}
                        bookData={item}
                        onDelete={props.cancelBookOrder}
                        onAdd={props.orderBook}
                        isOrdered={Object.keys(orderBooks).includes("" + item.id)}
                    />
                )
            }
        </div>
    )
}


const mapStateToProps = ({books, orderBooks}: AppState) => ({books, orderBooks});

const mapDispatchToProps = {orderBook, cancelBookOrder};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);