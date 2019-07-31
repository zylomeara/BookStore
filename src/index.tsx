import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from './components/bookstore-service-context';

import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <BookstoreServiceProvider value={bookstoreService}>
            <Router>
                <App/>
            </Router>
        </BookstoreServiceProvider>
    </Provider>,
    document.getElementById('root')
);