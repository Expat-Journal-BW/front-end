export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

export const SetCurrentUser = (user) => {
	return {
		type: SET_CURRENT_USER,
		payload: user,
		id: user.id,
	};
};

export const RemoveCurrentUser = () => {
	return {
		type: REMOVE_CURRENT_USER,
	};
};
