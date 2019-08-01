
const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    }
};
const orderBook = (data) => {
    return {
        type: 'ORDER_BOOK',
        payload: data
    }
};
const cancelBookOrder = (id) => {
    return {
        type: 'CANCEL_BOOK_ORDER',
        payload: id
    }
};

export {
    booksLoaded,
    orderBook,
    cancelBookOrder
}