interface Book {
    id: number;
    name: string;
    price: number;
    author: string
}

interface State {
    books: Book[],
    orderBooks: Record<string, number>
}

export type Action =
    {type: 'BOOKS_LOADED'; payload: Book[]} |
    {type: 'ORDER_BOOK'; payload: {bookId: Book['id'], count: number}} |
    {type: 'CANCEL_BOOK_ORDER'; payload: Book['id']}

const initialState: State = {
    books: [],
    orderBooks: {1: 1, 4: 1}
};

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload
            };
        case 'ORDER_BOOK':
            return {
                ...state,
                orderBooks: {
                    ...state.orderBooks,
                    [action.payload.bookId]: action.payload.count
                }
            };
        case 'CANCEL_BOOK_ORDER':
            let filterBooks = ({[action.payload]: _, ...rest}) => rest;

            return {
                ...state,
                orderBooks: filterBooks(state.orderBooks)
            };
        default:
            return state;

    }
};

export default reducer;