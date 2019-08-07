import * as React from 'react';
import BookstoreService from '../../services/BookstoreService';

const bookstoreService = new BookstoreService();

const {
    Provider: BookstoreServiceProvider,
    Consumer: BookstoreServiceConsumer,
} = React.createContext(bookstoreService);

export {
    BookstoreServiceConsumer,
    BookstoreServiceProvider,
};
