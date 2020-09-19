import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../hooks/axiosWithAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return fakeAuth.isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to="/signin" />
				);
			}}
		/>
	);
};

export default PrivateRoute;
