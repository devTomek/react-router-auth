export const LOADING_START = "LOADING_START";
export const LOADING_STOP = "LOADING_STOP";
export const CATCH_ERROR = "CATCH_ERROR";

export const loadingStart = () => ({
	type: LOADING_START
});

export const loadingStop = () => ({
	type: LOADING_STOP
});

export const catchError = (error: string) => ({
	type: CATCH_ERROR,
	error
});
