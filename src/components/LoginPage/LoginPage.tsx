import React, { useState, FormEvent } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styles from "./LoginPage.module.scss";
import { loginAction } from "./actions/actions";
import { useDispatch } from "react-redux";
import { Routes } from "../../api/routes";

interface IProps {
	history: {
		push: (url: string) => void;
	};
}

const LoginPage = ({ history }: IProps) => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (login === "" || password === "") {
			return;
		}

		dispatch(loginAction(login, password));
		history.push(Routes.DASHBOARD);
	};

	return (
		<div className={styles.loginForm}>
			<Form onSubmit={onSubmit}>
				<FormGroup className={styles.formGroup}>
					<Label for="email">Email</Label>
					<Input
						type="email"
						name="email"
						id="email"
						placeholder="email.example.com"
						value={login}
						onChange={e => setLogin(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="password">Password</Label>
					<Input
						type="password"
						name="password"
						id="password"
						placeholder="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</FormGroup>
				<Button id="loginButton">Login</Button>
			</Form>
		</div>
	);
};

export default LoginPage;
