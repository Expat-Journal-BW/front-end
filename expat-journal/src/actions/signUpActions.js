import { AccordionActions } from "@material-ui/core";
const ADD_USER = "ADD_USER";

export const SignUp = (newUser) => {
	return {
		type: ADD_USER,
		payload: newUser,
	};
};
