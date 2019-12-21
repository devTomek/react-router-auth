import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { loginAction, LOGIN } from "./actions";
import { LOADING_START, LOADING_STOP } from "../../../api/actions/actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("loginAction", () => {
	it("should return expected actions", async () => {
		const expectedActions = [
			{ type: LOADING_START },
			{ type: LOGIN, res: "login" },
			{ type: LOADING_STOP }
		];
		const store = mockStore({ loading: true });
		await store.dispatch(loginAction("login", "password"));
		expect(store.getActions()).toEqual(expectedActions);
	});
});
