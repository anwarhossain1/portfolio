import React from 'react';
import Auxi from '../../../hoc/Auxi';

import classes from './Banner.module.css';

const aboutme=(props)=>{
    return(
        <Auxi>
    
        <div className={classes.Aboutme}> </div>
        <div className={classes.Text}>
            <h1>I'm Anwar Hossain</h1>
            <h3>A ReactJS Developer</h3>
        </div>
        </Auxi>

    )

}
export default aboutme;