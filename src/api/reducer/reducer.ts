import { LOADING_START, LOADING_STOP, CATCH_ERROR } from "../actions/actions";

interface IAction {
	type: string;
	error?: string;
}

interface IInitailState {
	loading: boolean;
	error?: string;
}

const initialState: IInitailState = {
	loading: false,
	error: ""
};

const apiReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case LOADING_START:
			return {
				...state,
				loading: true
			};

		case LOADING_STOP:
			return {
				...state,
				loading: false
			};

		case CATCH_ERROR:
			return {
				...state,
				error: action.error
			};

		default:
			return state;
	}
};

export default apiReducer;
