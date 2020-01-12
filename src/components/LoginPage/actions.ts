import { Dispatch } from "redux";
import {
	loadingStart,
	loadingStop,
	catchError
} from "../../api/actions/actions";
import API, { setJWT } from "../../api/API";

export const LOGIN = "LOGIN";

export const loginAction = (email: string, password: string): any => async (
	dispatch: Dispatch
) => {
	try {
		dispatch(loadingStart());
		const jwt = await API.login(email, password);
		setJWT(jwt);
		dispatch(loadingStop());
	} catch (e) {
		dispatch(catchError(e));
		dispatch(loadingStop());
	}
};
