import * as React from "react";
import {Route, Switch} from 'react-router-dom';
import {Home, Cart} from '../Pages'

const App = () => {

    return (
        <Switch>
            <Route path={'/'} component={Home} exact/>
            <Route path={'/cart'} component={Cart}/>
        </Switch>
    )
};

export default App;