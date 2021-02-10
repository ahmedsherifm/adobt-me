import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import { Provider } from "react-redux";
import SearchParams from "./SearchParams";
import Details from "./Details";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">Adobt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
