import React from 'react';
import Auxi from '../../hoc/Auxi';
import Banner from '../PageItems/Banner/Banner';
import Aboutme from '../PageItems/Aboutme/Aboutme';

const home=(props)=>{
    return(
        <div>
            <Banner/>
            <Aboutme/>
        </div>

    );
}
export default home;