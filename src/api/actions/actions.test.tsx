import {
	loadingStart,
	LOADING_START,
	LOADING_STOP,
	loadingStop,
	catchError,
	CATCH_ERROR
} from "./actions";

describe("loadingStart()", () => {
	it("should return object with type", () => {
		expect(loadingStart()).toEqual({ type: LOADING_START });
	});
});

describe("loadingStop()", () => {
	it("should return object with type", () => {
		expect(loadingStop()).toEqual({ type: LOADING_STOP });
	});
});

describe("catchError", () => {
	it("should return object with type and error", () => {
		const error = "error";
		expect(catchError(error)).toEqual({ type: CATCH_ERROR, error });
	});
});
