// import Styles
import "./App.scss";
import { Fragment } from "react";

import Home from "./component/Home/Home";
import About from "./component/About/About";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Home />
        <About />
      </div>
    </Fragment>
  );
}

export default App;
