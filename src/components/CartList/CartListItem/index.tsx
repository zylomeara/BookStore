import * as React from "react";
import {Book} from "../../../constants/ActionTypes";
import {orderBook} from "../../../actions";
import {Divider, Input} from "antd";
import './style.less';


interface Props {
    cartData: Book;
    quantity: number;
    onChange: typeof orderBook
}

const CartListItem = ({cartData, quantity, onChange}: Props) => {

    return (
        <div className={'CartListItem'}>
            <div className={'CartListItem__Col'} style={{width: '20px'}}>{cartData.id}</div>
            <Divider type={'vertical'}/>
            <div className={'CartListItem__Col'} style={{width: '500px'}}>{cartData.name}</div>
            <Divider type={'vertical'}/>
            <div className={'CartListItem__Col'} style={{width: '100px'}}>{cartData.price} руб.</div>
            <Input
                type="number"
                value={quantity}
                min={'1'}
                onChange={
                    (event) =>
                        onChange({bookId: cartData.id, count: +event.target.value})}/>
        </div>
    )
};

export default CartListItem;