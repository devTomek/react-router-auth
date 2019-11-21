import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/LoginPage/LoginPage";

interface IProps {}

const App: FC<IProps> = (): JSX.Element => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Dashboard} />
				{/* TODO: make ProtecedRoute HOC or withRouteProtection hook */}
				<Route path="/login" component={LoginPage} />
			</Switch>
		</Router>
	);
};

export default App;
