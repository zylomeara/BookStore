import * as React from "react";

interface Props {
    bookData: import('../../../constants/ActionTypes').Book;
    isOrdered: boolean;
    onDelete: import('../../../actions').DeleteBookOrderActionCreator;
    onAdd: import('../../../actions').CreateOrUpdateBookOrderActionCreator;
}

const BookListItem = ({bookData, isOrdered, onDelete, onAdd}: Props) => {

    return <div>
        <span>{bookData.id}, {bookData.name}, {bookData.author}, {bookData.price} руб.</span>
        {
            isOrdered
            ? <a onClick={() => onDelete(bookData.id)}>Отменить</a>
            : <a onClick={() => onAdd({bookId: bookData.id, count: 1})}>Добавить</a>
        }
    </div>
};

export default BookListItem;