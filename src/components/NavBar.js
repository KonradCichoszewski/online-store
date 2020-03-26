import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import { switchTheme } from '../redux/actions'

function NavBar(/*props*/) {
    return(
        <nav>
            <NavLink activeClassName="active" className="inactive" 
                    to="/" exact>Home</NavLink>
            <NavLink activeClassName="active" className="inactive"
                    to="/about-us">About us</NavLink>
            <NavLink activeClassName="active" className="inactive"
                    to="/contact">Contact</NavLink>
            {/* <p id='theme-switch' onClick={ () => props.switchTheme()}>Switch the theme</p> */}
        </nav>
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         switchTheme: () => dispatch(switchTheme())
//     }
// }

export default NavBar;