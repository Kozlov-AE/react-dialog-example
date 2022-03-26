import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import WebFontLoader from "webfontloader";
import App from "./App";
import dayjs from "dayjs";

import "dayjs/locale/ru";
import "./css/index.css";

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

dayjs.locale("ru");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
