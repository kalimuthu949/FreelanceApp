import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage,AdminPage,Dashboard,ViewPage } from "./Components/Common";

import './CSS/Admin.css';
import logo from "./Images/TechnoRUCS Final.png"

function App() 
{  
  return (<div>
    <Router>
      <Switch>
          <Route path="/" exact component={() => <AdminPage></AdminPage>} />
          <Route path="/Login" exact component={() =><LoginPage></LoginPage>} />
          <Route path="/Dashboard" exact component={() =><Dashboard></Dashboard>} />
          <Route path="/ViewPage" exact component={(data) =><ViewPage projectid={data.location.state}></ViewPage>} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
