import { ADD_USER } from "../actions/signUpActions";

const SignUpReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return state;
		default:
			return state;
	}
};
