import { ADD_USER } from "../actions/signUpActions";

import initialState from "../dummyData";

const SignUpReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				users: [
					...state.users,
					{
						id: action.id,
						user: action.payload,
					},
				],
			};
		default:
			return state;
	}
};

export default SignUpReducer;
