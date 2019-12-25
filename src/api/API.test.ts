import API, { getJWT } from "./API";

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

	describe("login", () => {
		it("should set user in localStorage", async () => {
			const login = "login";
			const password = "password";
			await API.login(login, password);
			const user = JSON.stringify({ login, password });
			expect(localStorage.getItem("x-auth")).toEqual(user);
			localStorage.removeItem("x-auth");
		});
	});
});
