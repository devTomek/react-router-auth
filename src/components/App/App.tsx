import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import LoginPage from "../LoginPage/LoginPage";
import Protected from "../Protected/Protected";

const App = () => {
	return (
		<Router>
			<Switch>
				<Protected>
					<Route id="dashboard" path="/" component={Dashboard} />
					<Route id="dashboard" path="/dashboard" component={Dashboard} />
				</Protected>
			</Switch>
			<Route id="login" path="/login" component={LoginPage} />
		</Router>
	);
};

export default App;
