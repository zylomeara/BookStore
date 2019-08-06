import * as React from "react";
import BookstoreService from "../../services/bookstore-service";

const bookstoreService = new BookstoreService();

const {
    Provider: BookstoreServiceProvider,
    Consumer: BookstoreServiceConsumer
} = React.createContext(bookstoreService);

export {
    BookstoreServiceConsumer,
    BookstoreServiceProvider
}