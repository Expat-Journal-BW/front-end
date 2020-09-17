import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../hooks/axiosWithAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return localStorage.getItem("token") ? (
					<Component {...props} />
				) : (
					<Redirect to="/signin" />
				);
			}}
		/>
	);
};

export default PrivateRoute;
