import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { loginAction } from "./actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

//todo
describe.skip("loginAction", () => {
	it("should dispatch loadingStart", () => {
		const expectedActions = [];

		const store = mockStore({});
		return store.dispatch(loginAction("login", "password")).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
