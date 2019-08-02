import * as React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = <P extends object>() => (Wrapped: React.ComponentType<P>) => {

    return (props: P) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped {...props} bookstoreService={bookstoreService}/>)
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
};

export default withBookstoreService;