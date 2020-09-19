import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../hooks/axiosWithAuth";
import AddStoryForm from "../components/AddStoryForm";

const Dashboard = (props) => {
	console.log("Dashboard props:", props);
	const [logout, setLogout] = useState(false);

	const handleSignOut = (e) => {
		e.preventDefault();
		fakeAuth.signout(() => {
			setTimeout(() => {
				window.alert("Signed out!");
				setLogout(true);
			}, 500);
		});
	};

	const add = () => {};

	if (!fakeAuth.isAuthenticated) {
		return <Redirect to="/signin" />;
	}

	return (
		<div>
			<div>
				<button
					onClick={(e) => {
						handleSignOut(e);
					}}
				>
					Sign Out
				</button>
				<button>Add a story</button>
				<h2>Dashboard!</h2>
				<Route exact path="/userdashboard/addstory" component={AddStoryForm} />
			</div>
		</div>
	);
};

export default Dashboard;
