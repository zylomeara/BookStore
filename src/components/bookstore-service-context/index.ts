import * as React from 'react';

const {
    Provider: BookstoreServiceProvider,
    Consumer: BookstoreServiceConsumer
} = React.createContext(2);

export {
    BookstoreServiceConsumer,
    BookstoreServiceProvider
}