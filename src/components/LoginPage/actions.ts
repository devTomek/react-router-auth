import { Dispatch } from "redux";
import { loadingStart, loadingStop, catchError } from "../../api/actions";
import API from "../../api/API";

export const loginAction = (login: string, password: string) => (
	dispatch: Dispatch
) => {
	try {
		dispatch(loadingStart());
		API.login(login, password);
		//todo why this isnt called?
		dispatch(loadingStop());
	} catch (e) {
		dispatch(catchError(e));
		dispatch(loadingStop());
	}
};
