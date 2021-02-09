import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div id="somthing-important">
      <header>
        <Link to="/">Adobt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
