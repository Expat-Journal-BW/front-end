export const ADD_USER = "ADD_USER";

let userId = 2;

export const SignUp = (newUser) => {
	return {
		type: ADD_USER,
		payload: newUser,
		id: userId++,
	};
};
