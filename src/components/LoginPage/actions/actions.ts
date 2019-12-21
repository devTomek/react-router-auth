import { Dispatch } from "redux";
import {
	loadingStart,
	loadingStop,
	catchError
} from "../../../api/actions/actions";
import API from "../../../api/API";

export const LOGIN = "LOGIN";

export const loginAction = (login: string, password: string): any => async (
	dispatch: Dispatch
) => {
	try {
		dispatch(loadingStart());
		const res = await API.login(login, password);
		dispatch({ type: LOGIN, res });
		dispatch(loadingStop());
	} catch (e) {
		dispatch(catchError(e));
		dispatch(loadingStop());
	}
};
