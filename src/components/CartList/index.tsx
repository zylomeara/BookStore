import * as React from "react";
import {connect} from "react-redux";
import CartListItem from "./CartListItem";
import {orderBook} from "../../actions";

const CartList = ({books, orderBooks, orderBook}) => {
    return (Object.keys(orderBooks) || [])
        .map(id => books.find(book => book.id == id))
        .filter(item => item)
        .map(book => (
            <CartListItem key={book.id} cartData={book} onChange={orderBook} quantity={orderBooks[book.id]}/>
        ));
};

const mapStateToProps = ({books, orderBooks}) => ({books, orderBooks});

const mapDispatchToProps = {orderBook};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);