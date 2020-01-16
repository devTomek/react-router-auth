import React, { useState, useEffect } from "react";
import { getJWT } from "../../api/API";
import { Redirect } from "react-router-dom";
import { Routes } from "../../api/routes";

interface IProps {
	children: JSX.Element | JSX.Element[];
}

const Protected: React.FC<IProps> = ({ children }) => {
	const [jwt, setJwt] = useState("");

	useEffect(() => {
		setJwt(getJWT());
	}, [jwt]);

	if (!jwt) {
		return <Redirect to={Routes.LOGIN} />;
	}

	return <div>{children}</div>;
};

export default Protected;
