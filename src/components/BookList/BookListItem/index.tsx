import * as React from "react";

const BookListItem = ({bookData, isOrdered, onDelete, onAdd}) => {

    return <div>
        <span>{bookData.id}, {bookData.name}, {bookData.author}, {bookData.price} руб.</span>
        {
            isOrdered
            ? <a onClick={() => onDelete(bookData.id)}>Удалить</a>
            : <a onClick={() => onAdd({bookId: bookData.id, count: 1})}>Добавить</a>
        }
    </div>
};

export default BookListItem;