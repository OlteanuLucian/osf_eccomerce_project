import React from 'react';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';



import Home from "./pages/Home.js";
import NotFoundPage from "./pages/NotFound.js";
import CategoryLandingServices from "./pages/CategoryLandingServices.js"

function App() {

  // const code = 404;

  return (
      
      <Router>
        
          {/* {code === 200 && (<Redirect to = "/Home" />)}
          {code === 404 && (<Redirect to = "/404" />)} */}

        <Switch>

          <Route exact path = "/Home">
              <Home/>
          </Route>

          <Route exact path="/404">
            <NotFoundPage />
          </Route>
          
          <Route exact path ="/CategoryLandingServices">
            <CategoryLandingServices />
          </Route>
          <Redirect to="/Home" />
        </Switch>        

      </Router>
  );
}

export default App;
