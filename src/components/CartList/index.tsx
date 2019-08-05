import * as React from "react";
import {connect} from "react-redux";
import CartListItem from "./CartListItem";
import {cancelBookOrder, orderBook} from "../../actions";
import {AppState} from "../../reducers";
import {Book} from "../../constants/ActionTypes";
import {Button, Icon, List} from "antd";

type InjectedDispatch = {
    orderBook: typeof orderBook;
    cancelBookOrder: typeof cancelBookOrder;
}

type Props = Pick<AppState, 'books' | 'orderBooks'>
    & InjectedDispatch

const CartList = ({books, orderBooks, orderBook, cancelBookOrder}: Props) => {
    let cost = Object.entries(orderBooks)
        .reduce((acc, [id, count]) => {
            let foundBook = books.find(book => book.id === +id);

            if (!foundBook)
                return acc;

            return acc + foundBook.price * count
        }, 0);

    return <>
        <List
            header={<div>Товары:</div>}
            bordered
            dataSource={
                Object.keys(orderBooks)
                    .map(id => books.find(book => book.id === +id))
                    .filter(item => item)
            }
            renderItem={(book: Book) => (
                <List.Item
                    actions={[
                        <Button
                            key={1}
                            onClick={() =>
                                orderBooks[book.id] > 1 && orderBook({bookId: book.id, count: orderBooks[book.id]-1})}
                        ><Icon type={'minus'}/></Button>,
                        <Button
                            key={2}
                            onClick={() =>
                                orderBook({bookId: book.id, count: orderBooks[book.id]+1})}
                            type={'primary'}
                        >
                            <Icon type={'plus'}/>
                        </Button>,
                        <Button
                            key={3}
                            onClick={() =>
                                cancelBookOrder(book.id)} type={'danger'}
                        >
                            <Icon type={'close'}/>
                        </Button>,
                    ]}
                >
                    <CartListItem key={book.id} cartData={book} onChange={orderBook} quantity={orderBooks[book.id]}/>
                </List.Item>
            )}

        />
        <div style={{padding: 10}}>Общая цена: {cost} рублей</div>
    </>;
};

const mapStateToProps = ({books, orderBooks}: AppState) => ({books, orderBooks});

const mapDispatchToProps = {orderBook, cancelBookOrder};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);