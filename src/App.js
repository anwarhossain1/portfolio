import React from 'react';
import Layout from './components/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';
import ParticleComponent from './Particle/ParticleComponent';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Auxi from './hoc/Auxi';
import Footer from './components/PageItems/Footer/Footer';

function App(){
  
    return (
      <Auxi>
      
      
      <Toolbar/>
      
       <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          {
             <div className="App">
             <Layout/>  
           </div>
          
          /* You can render <Route> and <NavTabs /> here */
          }
        </div>
      </div>
      <Footer/>
      </Auxi>
      
    );

  
  
}

export default App;
