import React from 'react';
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import "./SideDrawer.css"

const SideDrawer = props => {

    const content = (<CSSTransition in={props.show} classNames="slide-in-left" mountOnEnter unmountOnExit timeout={200}>
                        <aside className="side-drawer" onClick={props.onClick}> {props.children} </aside>
                    </CSSTransition>);
    return ReactDOM.createPortal(content, document.getElementById("sidedrawer-hook"));
}

export default SideDrawer;