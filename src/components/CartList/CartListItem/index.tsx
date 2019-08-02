import * as React from "react";
import {Book} from "../../../constants/ActionTypes";
import {orderBook} from "../../../actions";


interface Props {
    cartData: Book;
    quantity: number;
    onChange: typeof orderBook
}

const CartListItem = ({cartData, quantity, onChange}: Props) => {

    return (
        <div>
            {cartData.id}, {cartData.name}, {cartData.price} руб.
            <input
                type="number"
                value={quantity}
                min={'0'}
                onChange={
                    (event) =>
                        onChange({bookId: cartData.id, count: +event.target.value})}/>
        </div>
    )
};

export default CartListItem;