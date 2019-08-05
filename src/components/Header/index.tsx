import * as React from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {AppState} from "../../reducers";
import {Menu} from 'antd';
import {withRouter} from 'react-router-dom';

type Props = Pick<AppState, 'orderBooks'>

const Header = ({orderBooks, history}: Props) => {
    console.log(history.location.pathname);

    return <Menu
        mode={'horizontal'}
        theme={'dark'}
        selectedKeys={[history.location.pathname]}>
        <Menu.Item key={'/goods'}>
            <Link to={'/'}>Товары</Link>
        </Menu.Item>
        <Menu.Item
            key={'/cart'}
            disabled={Object.keys(orderBooks).length < 1}
        >
            <Link to={'/cart'}>Корзина</Link>
        </Menu.Item>
    </Menu>
};

const mapStateToProps = ({orderBooks}: AppState) => ({orderBooks});

export default connect(mapStateToProps)(withRouter(Header));