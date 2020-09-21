import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../hooks/axiosWithAuth";

import Stories from "./Stories";
import AddStoryForm from "./AddStoryForm";

const Dashboard = (props) => {
	useEffect(() => {
		console.log("Dashboard props:", props);
	}, [props]);
	const [logout, setLogout] = useState(false);
	const [adding, setAdding] = useState(false);

	const handleSignOut = (e) => {
		e.preventDefault();
		fakeAuth.signout(() => {
			setTimeout(() => {
				window.alert("Signed out!");
				props.RemoveCurrentUser();
				setLogout(true);
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
		return <AddStoryForm setAdding={setAdding} />;
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
				<Stories user={props.currentUser} />
			</div>
		</div>
	);
};

export default Dashboard;
