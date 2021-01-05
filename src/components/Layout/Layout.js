import React from 'react';
import Auxi from '../../hoc/Auxi';
// import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import Banner from '../PageItems/Banner/Banner';
import Aboutme from '../PageItems/Aboutme/Aboutme';
// import Footer from '../PageItems/Footer/Footer';
// import Cards from '../PageItems/Cards/Cards';
import {Route, Switch} from 'react-router-dom';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';

const layout=(props)=>{
    return(
        <div >
        <Auxi>
            {/* <Toolbar/> */}
            <main>
                {props.children}
            </main>
            
          
             <Route path="/" exact component={Home}/> 
            <Route path="/a" exact  component={Projects}/>
            
            
            {/* <Footer/>
            <Cards/> */}

             
            
        <div>Contact form</div>
        <div>Footer</div> 
        
        </Auxi>
        </div>
    );
}

export default layout;