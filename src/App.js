import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import Home from "./pages/Home.js";
import NotFoundPage from "./pages/NotFound.js";
import CategoryLandingServices from "./pages/CategoryLandingServices.js"

function App() {
  return (
      
      <Router>
        
        {/* <Switch> */}

          <Route exact path = "/Home" component = {Home}/>
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path ="/CategoryLandingServices" component = {CategoryLandingServices}/>
        {/* </Switch>         */}

      </Router>
     
  );
}

export default App;
