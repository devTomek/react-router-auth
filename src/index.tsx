import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";
import { Provider } from "react-redux";
import { Store } from "redux";
import { IUser } from "./types/index";

const store: Store = configureStore({});

const user: IUser = store.getState().user;

ReactDOM.render(
	<Provider store={store}>
		<App user={user} />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
