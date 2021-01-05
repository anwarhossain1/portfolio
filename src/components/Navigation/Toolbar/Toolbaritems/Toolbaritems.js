import React from 'react';
import classes from './Toolbaritems.module.css';
import {Route,NavLink} from 'react-router-dom';
import Projects from '../../../Projects/Projects';

const toolbaritems=(props)=>{
    return(
        
        <li className={classes.NavigationItem}>
        <NavLink to={props.link}
        exact={props.exact}
        activeClassName={classes.active}
        >{props.children}
        </NavLink>

    </li>

    );
}
export default toolbaritems;