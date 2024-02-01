import api from './api';

export const login = async (username, password) => {
	let response = null;
	if (username === password) {
		response = { username }
	} else {
		throw "Username and password doesn't match";
	}


	localStorage.setItem('user', JSON.stringify(response));

	return response;
};

export const isAuthenticated = () => {
	return {};
	const user = localStorage.getItem('user');
	if (!user) {
		return null;
	}
	return JSON.parse(user);
};