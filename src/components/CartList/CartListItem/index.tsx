import * as React from "react";

const CartListItem = ({cartData, quantity, onChange}) => {

    return (
        <div>
            {cartData.id}, {cartData.name}
            <input
                type="number"
                value={quantity}
                onChange={
                    (event) =>
                        onChange({bookId: cartData.id, count: +event.target.value})}/>
        </div>
    )
};

export default CartListItem;