import React from 'react';
import classes from './Toolbar.module.css';
import Toolbaritems from './Toolbaritems/Toolbaritems';
const toolbar=(props)=>{
    return(
        <div className={classes.Toolbar}>
            <Toolbaritems link="/" exact >Home</Toolbaritems> 
            <Toolbaritems link="/a" >My Projects</Toolbaritems>
            <Toolbaritems link="/g" >Home</Toolbaritems>
            <Toolbaritems link="/h" >Home</Toolbaritems>
        </div>
    );
}
export default toolbar;