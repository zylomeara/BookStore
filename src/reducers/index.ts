import {ActionTypes, State} from "../constants/ActionTypes";


const initialState: State = {
    books: [],
    orderBooks: {1: 1, 4: 1}
};

const reducer = (state: State = initialState, action: ActionTypes): State => {
    switch (action.type) {
        case 'LOAD_BOOKS':
            return {
                ...state,
                books: action.payload
            };
        case 'CREATE_OR_UPDATE_BOOK_ORDER':
            return {
                ...state,
                orderBooks: {
                    ...state.orderBooks,
                    [action.payload.bookId]: action.payload.count
                }
            };
        case 'DELETE_BOOK_ORDER':
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
export type AppState = State