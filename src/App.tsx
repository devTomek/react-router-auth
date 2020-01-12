import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/LoginPage/LoginPage";
import { Routes } from "./api/routes";
import { getJWT } from "./api/API";

const App = () => {
	const jwt = getJWT();

	return (
		<Router>
			<Switch>
				<Route id="dashboard" path="/" exact component={Dashboard} />
				<Route id="login" path="/login" component={LoginPage} />
			</Switch>
			//todo: not working as expected
			{!jwt && <Redirect to={Routes.LOGIN} />}
		</Router>
	);
};

export default App;
