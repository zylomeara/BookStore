import * as React from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {AppState} from "../../reducers";

type Props = Pick<AppState, 'orderBooks'>

const Header = ({orderBooks}: Props) => {

    return <div style={{padding: '10px'}}>
        <Link style={{marginRight: '25px'}} to={'/'}>Home</Link>
        {Object.keys(orderBooks).length < 1 || <Link style={{marginRight: '25px'}} to={'/cart'}>Cart</Link>}
    </div>
};

const mapStateToProps = ({orderBooks}: AppState) => ({orderBooks});

export default connect(mapStateToProps)(Header);