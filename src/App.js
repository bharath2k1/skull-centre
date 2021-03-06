import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomepageComponent";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/Shop/ShopComponent";
import Header from "./Components/Header/Header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
