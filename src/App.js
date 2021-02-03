import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/home";


function App() {
  return (
    <div>
     <Router>
        <Switch>
         <Home/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
