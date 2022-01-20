import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Main from "./components";

const App = () => {
  return <main className="container">
      <BrowserRouter>
          <Switch>
              {/* <Route path="/nuevo">
                  <ProductForm />
              </Route> */}
              {/* <Route path="/editar/:codigo">
                  <ProductForm />
              </Route> */}
              <Route exact path="/">
                  <Main />
              </Route>
          </Switch>
      </BrowserRouter>
  </main>
}

export default App;
