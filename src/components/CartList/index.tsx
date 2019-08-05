import * as React from "react";
import {connect} from "react-redux";
import CartListItem from "./CartListItem";
import {orderBook} from "../../actions";
import {AppState} from "../../reducers";
import {Book} from "../../constants/ActionTypes";
import {List} from "antd";

type Props = Pick<AppState, 'books' | 'orderBooks'> & {orderBook: typeof orderBook}

const CartList = ({books, orderBooks, orderBook}: Props) => {
    let cost = Object.entries(orderBooks)
        .reduce((acc, [id, count]) => {
            let foundBook = books.find(book => book.id === +id);

            if (!foundBook)
                return acc;

            return acc + foundBook.price * count
        }, 0);

    return <>
        <List
            header={<div>Товары</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={
                Object.keys(orderBooks)
                    .map(id => books.find(book => book.id === +id))
                    .filter(item => item)
            }
            renderItem={(book: Book) => (
                <List.Item
                    actions={[<div key={1}>1</div>]}
                >
                    <CartListItem key={book.id} cartData={book} onChange={orderBook} quantity={orderBooks[book.id]}/>
                </List.Item>
            )}

        />
        <div style={{padding: 10}}>Общая цена: {cost} рублей</div>
    </>;
};

const mapStateToProps = ({books, orderBooks}: AppState) => ({books, orderBooks});

const mapDispatchToProps = {orderBook};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);