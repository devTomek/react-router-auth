const login = async (login: string, password: string) => {
	const user = Object.freeze({
		login,
		password
	});
	localStorage.setItem("x-auth", JSON.stringify(user));
	return user;
};

const API = {
	login
};

export default API;
