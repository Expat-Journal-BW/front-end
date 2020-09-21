import { ADD_USER, UPDATE_USER_ID } from "../actions/signUpActions";
import { ADD_STORY } from "../actions/addStoryFormActions";
import {
	SET_CURRENT_USER,
	REMOVE_CURRENT_USER,
} from "../actions/dashboardActions";

import initialState, { initUserId, currentUser } from "../dummyData";

const initState = {
	currentUser: currentUser,
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
		case SET_CURRENT_USER:
			return {
				...state,
				currentUser: { ...action.payload },
			};
		case REMOVE_CURRENT_USER:
			return {
				...state,
				currentUser: {},
			};
		case ADD_STORY:
			return state;
		default:
			return state;
	}
};

export default rootReducer;
