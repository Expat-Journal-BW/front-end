import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fakeAuth } from "../hooks/axiosWithAuth";
import AddStoryForm from "../components/AddStoryForm";

const Dashboard = (props) => {
	console.log("Dashboard props:", props);
	const [logout, setLogout] = useState(false);

	const handleSignOut = (e) => {
		//e.preventDefault();
		fakeAuth.signout(() => {
			setTimeout(() => {
				window.alert("Signed out!");
				localStorage.clear();
				setLogout(true);
			}, 500);
		});
	};

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
				<h2>Dashboard!</h2>
				<AddStoryForm/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(Dashboard);
