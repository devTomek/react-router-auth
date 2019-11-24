import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/LoginPage/LoginPage";
import { IProps } from "./types/app";

const App = (props: IProps) => {
	const { user } = props;

	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Dashboard} />
				<Route path="/login" component={LoginPage} />
			</Switch>
			{user && <Redirect to="/" />}
			{!user && <Redirect to="/login" />}
		</Router>
	);
};

export default App;

// TODO: tests
