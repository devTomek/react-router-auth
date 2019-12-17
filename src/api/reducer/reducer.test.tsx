import apiReducer from "./reducer";
import { LOADING_START, LOADING_STOP, CATCH_ERROR } from "../actions/actions";

describe("apiReducer", () => {
	it("should return state with loading: true when start loading", () => {
		const state = { loading: false };
		const action = { type: LOADING_START };
		const expectedState = { ...state, loading: true };

		expect(apiReducer(state, action)).toEqual(expectedState);
	});

	it("should return state with loading: false when stop loading", () => {
		const state = { loading: true };
		const action = { type: LOADING_STOP };
		const expectedState = { ...state, loading: false };

		expect(apiReducer(state, action)).toEqual(expectedState);
	});

	it("should return state with error when error occured", () => {
		const state = { loading: false };
		const error = "error";
		const action = { type: CATCH_ERROR, error };
		const expectedState = { ...state, error };

		expect(apiReducer(state, action)).toEqual(expectedState);
	});

	it("should return state from unknown action type", () => {
		const state = { loading: false };
		const action = { type: "UNKNOWN" };

		expect(apiReducer(state, action)).toEqual(state);
	});
});
