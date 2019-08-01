import * as React from "react";
import {Route, Switch} from 'react-router-dom';
import {Home, Cart} from '../Pages'
import Header from "../Header";
import 'antd/dist/antd.less';

const App = () => {

    return <>
        <Header/>
        <Switch>
            <Route path={'/'} component={Home} exact/>
            <Route path={'/cart'} component={Cart}/>
        </Switch>
    </>
};

export default App;