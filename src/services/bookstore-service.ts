import {Book} from "../constants/ActionTypes";

export default class BookstoreService {
    getBooks(): Book[] {
        return [
            {id: 1, name: 'one name', author: '11', price: 5000},
            {id: 2, name: 'two name', author: '22', price: 5000},
            {id: 3, name: 'three name', author: '33', price: 5000},
            {id: 4, name: 'four name', author: '44', price: 5000},
            {id: 5, name: 'five name', author: '55', price: 5000},
            {id: 6, name: 'six name', author: '66', price: 5000},
        ]
    }
}