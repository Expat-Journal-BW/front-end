import axios from "axios";

const axiosAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		baseURL: "https://expat-journalist.herokuapp.com", //change later
		headers: {
			Authorization: token,
			"Content-Type": "application/json",
		},
	});
};

export default axiosAuth;
