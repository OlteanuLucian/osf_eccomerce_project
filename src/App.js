import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import Home from "./pages/Home.js";
import NotFoundPage from "./pages/NotFound.js";

// import NavbarMenuResponsive from "./components/NavbarMenuResponsive/NavbarMenuResponsive.js";
// import NavbarMenuDesktop from "./components/NavbarMenuDesktop/NavbarMenuDesktop.js";
// import Banner from "./components/MainSection/Banner/Banner.js";

function App() {
  return (
      
      <Router>
        
        {/* <Switch> */}

          <Route exact path = "/Home" component = {Home}/>
          <Route exact path="/404" component={NotFoundPage} />
        {/* </Switch>         */}

      </Router>
     
  );
}

export default App;
