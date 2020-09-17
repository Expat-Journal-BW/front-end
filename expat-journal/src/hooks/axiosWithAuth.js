import axios from "axios";

const axiosAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		baseURL: "http://localhost:5000", //change later
		headers: {
			Authorization: token,
		},
	});
};

export default axiosAuth;

export const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true;
		setTimeout(cb, 100);
	},
	signout(cb) {
		this.isAuthenticated = false;
		setTimeout(cb, 100);
	},
};
