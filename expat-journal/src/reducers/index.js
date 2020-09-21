import { ADD_USER, UPDATE_USER_ID } from "../actions/signUpActions";
import { ADD_STORY } from "../actions/addStoryFormActions";
import { SIGN_OUT } from "../actions/dashboardActions";

import initialState, { initUserId } from "../dummyData";

const initState = {
	initUserId: initUserId,
	users: [...initialState.users],
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				users: [
					...state.users,
					{
						user: {
							...action.payload,
							id: action.id,
						},
					},
				],
			};
		case UPDATE_USER_ID:
			return {
				...state,
				initUserId: state.initUserId + 1,
			};
		case SIGN_OUT:
			return state;
		case ADD_STORY:
			return state;
		default:
			return state;
	}
};

export default rootReducer;
