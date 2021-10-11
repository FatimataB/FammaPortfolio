
import './App.css';
/*import Header from './Components/Header.js'*/
import Footer from './Components/Footer.js'
import Portfolio from './Components/Portfolio.js'
import Work from './Components/Work.js'
import Shop from './Components/Shop.js'
import Contact from './Components/Contact.js'
import Patterns from './Components/Patterns.js'
import Nature from './Components/Nature.js'
import Fashion from './Components/Fashion.js'
import Portraits from'./Components/Portraits.js'
import Hairstyles from'./Components/Hairstyles.js'
import Lifestyle from'./Components/Lifestyle.js'


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
      
        <Switch>
          <Route path="/work">
            <Work/>
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

          <Route path="/fashion">
            <Fashion/>
          </Route>

          <Route path="/portraits">
            <Portraits/>
          </Route>

          <Route path="/hairstyles">
            <Hairstyles/>
          </Route>

          <Route path="/lifestyle">
            <Lifestyle/>
          </Route>


          <Route path="/"> 
            <Portfolio/>
          </Route>  
        </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
