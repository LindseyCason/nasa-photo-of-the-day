import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'semantic-ui-css/semantic.min.css'

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lexend Exa', 'sans-serif', 'Shadows Into Light']
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
