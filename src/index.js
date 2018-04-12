import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./App";

injectTapEventPlugin();

ReactDOM.render(
	< MuiThemeProvider >
		<App / >
	</MuiThemeProvider>, 
	document.getElementById("root")
);