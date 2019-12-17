import { Dispatch } from "redux";
import {
	loadingStart,
	loadingStop,
	catchError
} from "../../../api/actions/actions";
import API from "../../../api/API";

export const loginAction = (login: string, password: string) => (
	dispatch: Dispatch
) => {
	try {
		dispatch(loadingStart());
		API.login(login, password);
		dispatch(loadingStop());
	} catch (e) {
		dispatch(catchError(e));
		dispatch(loadingStop());
	}
};
