import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div id="somthing-important">
      <h1>Adobt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
