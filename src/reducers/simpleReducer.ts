import { IAction, IInitialState } from "../types/simpleReducer";

const initialState: IInitialState = {};

export default (state: IInitialState = initialState, action: IAction) => {
	switch (action.type) {
		case "SIMPLE_ACTION":
			return {
				result: action.payload
			};
		default:
			return state;
	}
};
