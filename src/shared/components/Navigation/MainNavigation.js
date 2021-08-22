import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import "./MainNavigation.css"
import Backdrop from '../UIElements/Backdrop';

const Nav = props => {
    const [isDrawerOpen, setDrawer] = useState(false);
    const toggleDrawer = e => {
        setDrawer(!isDrawerOpen);
    }
    return(
        <>
        { isDrawerOpen && <Backdrop onClick = {toggleDrawer}/> }
        
                <SideDrawer show={isDrawerOpen} onClick={toggleDrawer}>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks/>
                    </nav>
                </SideDrawer>
        
        
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={toggleDrawer}>
                <span/>
                <span/>
                <span/>
            </button>
            <h1 className="main-navigation__title">
                <Link to="/" >Your Places</Link> 
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks/>
            </nav>
        </MainHeader>
        </>
    );
}


export default Nav;