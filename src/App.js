
import React, { useState , useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [state,dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The logged User : " ,authUser);
      if(authUser){
        dispatch({
          type:"SET_USER",
          user : authUser
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user : null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path ="/login" exact>
            <Login/>
          </Route>
          <Route path ="/payment" exact>
            <Header/>
            <Payment/>
          </Route>
          <Route path ="/checkout" exact>
            <Header />
            <Checkout/>
          </Route>
          <Route path ="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
