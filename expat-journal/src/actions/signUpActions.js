import axiosAuth from "../hooks/axiosWithAuth";

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER_ID = "UPDATE_USER_ID";

export const SignUp = (newUser) => (dispatch) => {
	//dispatch({ type: ADD_USER_START });
	axiosAuth()
		.post("/register", newUser)
		.then((res) => {
			console.log("newUser:", newUser);
			console.log("SignUp action response:", res.data);
			dispatch({ type: ADD_USER, payload: res.data });
			window.alert("User successfully added.");
		});
};

export const UpdateId = () => {
	return {
		type: UPDATE_USER_ID,
	};
};
