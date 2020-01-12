import { getJWT } from "./API";

describe("API", () => {
	describe("getJWT", () => {
		it("should return JWT", () => {
			localStorage.setItem("x-auth", "user");
			expect(getJWT()).toEqual("user");
			localStorage.removeItem("x-auth");
		});

		it("should return null", () => {
			expect(getJWT()).toEqual(null);
		});
	});
});
