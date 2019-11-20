import { Dispatch, Action } from "redux";

export const simpleAction: Function = (): Function => (
	dispatch: Dispatch<Action>
): void => {
	dispatch({
		type: "SIMPLE_ACTION",
		payload: "result_of_simple_action"
	});
};
