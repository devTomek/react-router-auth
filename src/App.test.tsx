import React from "react";
import App from "./App";
import { shallow, ShallowWrapper } from "enzyme";

interface IProps {}

describe("App", () => {
	let wrapper: ShallowWrapper, props: IProps;

	beforeEach(() => {
		props = {};
		wrapper = shallow(<App {...props} />);
	});

	it("should have dashboard path", () => {
		const dashboard = wrapper.find("#dashboard");
		const path = dashboard.props().path;
		const dashboardPath = "/";

		expect(path).toEqual(dashboardPath);
	});

	it("should have login path", () => {
		const login = wrapper.find("#login");
		const path = login.props().path;
		const loginPath = "/login";

		expect(path).toEqual(loginPath);
	});

	it("should redirect to /login", () => {
		const redirect = wrapper.find("Redirect");
		const path = redirect.props().to;
		expect(path).toEqual("/login");
	});

	describe("given user", () => {
		beforeAll(() => {
			window.localStorage.setItem("x-auth", "user");
		});

		afterAll(() => {
			window.localStorage.removeItem("x-auth");
		});

		it("should redirect to /", () => {
			const redirect = wrapper.find("Redirect");
			const path = redirect.props().to;
			expect(path).toEqual("/");
		});
	});
});
