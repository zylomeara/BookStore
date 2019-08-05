import * as React from "react";
import {Button, Card, Tooltip} from "antd";

interface Props {
    bookData: import('../../../constants/ActionTypes').Book;
    isOrdered: boolean;
    onDelete: import('../../../actions').DeleteBookOrderActionCreator;
    onAdd: import('../../../actions').CreateOrUpdateBookOrderActionCreator;
}

const BookListItem = ({bookData, isOrdered, onDelete, onAdd}: Props) => {

    return <Card
        style={{width: 230, margin: 10, display: 'inline-block'}}
        cover={<img style={{padding: '20px 20px 0 20px', height: 300}} src={bookData.image} alt={bookData.name}/>}
        actions={[
                <Button
                    key={1}
                    type={isOrdered ? 'default' : 'primary'}
                    onClick={() =>
                        isOrdered
                            ? onDelete(bookData.id)
                            : onAdd({bookId: bookData.id, count: 1})}
                >
                    {isOrdered ? 'Отменить' : 'Добавить'}
                </Button>
        ]}
    >
        <Card.Meta
            title={
                <Tooltip
                    title={`${bookData.name} (${bookData.author})`}
                >{bookData.name} ({bookData.author})</Tooltip>
            }
            description={bookData.price + ' руб.'}
        />
    </Card>
};

export default BookListItem;