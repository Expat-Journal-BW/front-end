import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../hooks/axiosWithAuth";

import Stories from "./Stories";
import AddStoryForm from "./AddStoryForm";

const Dashboard = (props) => {
	console.log("Dashboard props:", props);
	const [logout, setLogout] = useState(false);
	const [adding, setAdding] = useState(false);
	// console.log(logout, Stories);

	const handleSignOut = (e) => {
		e.preventDefault();
		fakeAuth.signout(() => {
			setTimeout(() => {
				window.alert("Signed out!");
				setLogout(true);
				props.SignOut();
			}, 500);
		});
	};

	const add = (e) => {
		e.preventDefault();
		setAdding(true);
	};

	if (!fakeAuth.isAuthenticated) {
		return <Redirect to="/signin" />;
	}

	if (adding) {
		return <Redirect to="/userdashboard/addstory" />;
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
				<Route exact path="/userdashboard">
					<button onClick={(e) => add(e)}>Add a story</button>
				</Route>
				<h2>Dashboard!</h2>
				<Route
					exact
					path="/userdashboard/addstory"
					component={() => (
						<AddStoryForm adding={adding} setAdding={setAdding} />
					)}
				/>
			</div>
		</div>
	);
};

export default Dashboard;
