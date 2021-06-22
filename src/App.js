
import './App.css';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'
import Work from './Components/Work.js'
import Shop from './Components/Shop.js'
import Contact from './Components/Contact.js'
import About from './Components/About.js'
import Patterns from './Components/Patterns.js'
import Nature from './Components/Nature.js'


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {



  return (
    <Router>
      <div className="App">
      
        <Header/>


        <Switch>
          <Route path="/work">
            <Work/>
          </Route>  
          <Route path="/about">
            <About/>
          </Route>  

          <Route path="/shop">
            <Shop/>
          </Route>  

          <Route path="/contact">
            <Contact/>
          </Route> 

          <Route path="/patterns">
            <Patterns/>
          </Route>  

           <Route path="/nature">
            <Nature/>
          </Route> 

          <Route path="/"> 
            <Home/>
          </Route>  
        </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
