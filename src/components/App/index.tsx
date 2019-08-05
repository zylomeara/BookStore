import * as React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {Home, Cart} from '../Pages'
import Header from "../Header";
import 'antd/dist/antd.less';
import './style.less'

const App = () => {

    return <>
        <Header/>
        <Switch>
            <Route path={'/goods'} component={Home}/>
            <Route path={'/cart'} component={Cart}/>
            <Redirect from={'/'} exact to={'/goods'}/>
        </Switch>
    </>
};

export default App;