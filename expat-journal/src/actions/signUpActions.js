export const ADD_USER = "ADD_USER";
export const UPDATE_USER_ID = "UPDATE_USER_ID";

export const SignUp = (newUser) => {
	return {
		type: ADD_USER,
		payload: newUser,
		id: newUser.id,
	};
};

export const UpdateId = () => {
	return {
		type: UPDATE_USER_ID,
	};
};
