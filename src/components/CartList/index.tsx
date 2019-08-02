import * as React from "react";
import {connect} from "react-redux";
import CartListItem from "./CartListItem";
import {orderBook} from "../../actions";
import {AppState} from "../../reducers";
import {Book} from "../../constants/ActionTypes";

type Props = Pick<AppState, 'books' | 'orderBooks'> & {orderBook: typeof orderBook}

const CartList = ({books, orderBooks, orderBook}: Props) => {
    let cost = Object.entries(orderBooks)
        .reduce((acc, [id, count]) => {
            let price = books.find(book => book.id === +id)!.price;

            return acc + price * count
        }, 0);

    return <>
        {
            Object.keys(orderBooks)
                .map(id => books.find(book => book.id === +id))
                .filter(item => item)
                .map((book: Book) => (
                    <CartListItem key={book.id} cartData={book} onChange={orderBook} quantity={orderBooks[book.id]}/>
                ))
        }
        <div>Общая цена: {cost} рублей</div>
    </>;
};

const mapStateToProps = ({books, orderBooks}: AppState) => ({books, orderBooks});

const mapDispatchToProps = {orderBook};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);