import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import LoginPage from "./LoginPage";
import { Routes } from "../../api/routes";

jest.mock("react-redux", () => ({
	useDispatch: jest.fn()
}));

interface IProps {
	history: {
		push: (url: string) => void;
	};
}

describe("LoginPage", () => {
	let props: IProps, wrapper: ShallowWrapper<IProps>;

	beforeEach(() => {
		props = {
			history: {
				push: jest.fn()
			}
		};
		wrapper = shallow(<LoginPage {...props} />);
	});

	//todo
	it.skip("it should redirect to dashboard", () => {
		const pushSpy = jest.spyOn(props.history, "push");

		const emailInput = wrapper.find("#email");
		emailInput.simulate("change", { target: { value: "login" } });

		const passwordInput = wrapper.find("#password");
		passwordInput.simulate("change", { target: { value: "password" } });

		const loginButton = wrapper.find("#loginButton");
		loginButton.simulate("click");

		expect(pushSpy).toHaveBeenCalledWith(Routes.DASHBOARD);
	});

	it.skip("it should not redirect", () => {});
});
