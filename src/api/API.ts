const login = async (email: string, password: string) => {
	const res = await fetch("/api/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ email, password })
	});
	const jwt = await res.json();

	return jwt;
};

export const getJWT = () => localStorage.getItem("x-auth");
export const setJWT = (jwt: string) => localStorage.setItem("x-auth", jwt);

const API = {
	login
};

export default API;
