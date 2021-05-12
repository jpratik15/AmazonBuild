import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
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
