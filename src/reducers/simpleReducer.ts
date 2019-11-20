import { Action, InitialState } from "../types/simpleReducer";

const initialState: InitialState = {};

export default (state: InitialState = initialState, action: Action) => {
	switch (action.type) {
		case "SIMPLE_ACTION":
			return {
				result: action.payload
			};
		default:
			return state;
	}
};
