import React from "react";
import App from "./App";
import { shallow, ShallowWrapper } from "enzyme";
import { Routes } from "./api/routes";

interface IProps {}

describe("App", () => {
	let wrapper: ShallowWrapper, props: IProps;

	beforeEach(() => {
		props = {};
		wrapper = shallow(<App {...props} />);
	});

	it("should have dashboard path", () => {
		const dashboard: ShallowWrapper<any> = wrapper.find("#dashboard");
		const path = dashboard.props().path;
		const dashboardPath = Routes.DASHBOARD;

		expect(path).toEqual(dashboardPath);
	});

	it("should have login path", () => {
		const login: ShallowWrapper<any> = wrapper.find("#login");
		const path = login.props().path;
		const loginPath = Routes.LOGIN;

		expect(path).toEqual(loginPath);
	});

	it("should redirect to LoginPage", () => {
		const redirect = wrapper.find("Redirect");
		const path = redirect.props().to;
		expect(path).toEqual(Routes.LOGIN);
	});
});
