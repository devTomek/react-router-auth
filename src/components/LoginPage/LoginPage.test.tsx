import React from "react";
import { shallow } from "enzyme";
import LoginPage from "./LoginPage";
import { Routes } from "../../api/routes";

describe("LoginPage", () => {
	let props, wrapper;

	beforeEach(() => {
		props = {
			history: {
				push: jest.fn()
			}
		};
		wrapper = shallow(<LoginPage {...props} />);
	});

	//todo
	it.skip(`it should redirect to ${Routes.DASHBOARD}`, () => {});
	it.skip("it should not redirect", () => {});
});
