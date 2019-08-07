import * as React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = <P extends object>() => (Wrapped: React.ComponentType<P>) =>
  (props: P) => {
    return (
      <BookstoreServiceConsumer>
        {
          bookstoreService => (<Wrapped {...props} bookstoreService={bookstoreService}/>)
        }
      </BookstoreServiceConsumer>
    );
  };

export default withBookstoreService;
