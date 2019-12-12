import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/LoginPage/LoginPage";

const App = () => {
	const user = localStorage.getItem("x-auth");

	return (
		<Router>
			<Switch>
				<Route id="dashboard" path="/" exact component={Dashboard} />
				<Route id="login" path="/login" component={LoginPage} />
			</Switch>
			{user && <Redirect to="/" />}
			{!user && <Redirect to="/login" />}
		</Router>
	);
};

export default App;
