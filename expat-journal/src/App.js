import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import NavBar from './components/NavBar'



import { connect } from "react-redux";
import { SignUp, UpdateId } from "./actions/signUpActions";
import { SetCurrentUser, RemoveCurrentUser } from "./actions/dashboardActions";
import { AddStory } from "./actions/addStoryFormActions";

import {updateStory} from "./actions/updateStoryFormAction";

function App(props) {
	// hey hey
	useEffect(() => {
		console.log("App props:", props);
	}, [props]);
	return (
		
		<div className="App">
			< NavBar />
			<Route exact path="/">
				<nav>
					<div className="nav-link">
						<Link
							to="/signup"
							style={{
								paddingLeft: 13,
								textDecoration: "none",
								color: "black",
							}}
						>
							Signup
						</Link>
						<Link
							to="/signin"
							style={{
								paddingLeft: 13,
								textDecoration: "none",
								color: "black",
							}}
						>
							Signin
						</Link>
					</div>
				</nav>
			</Route>
			<Route exact path="/signup" render={() => <Signup {...props} />} />
			<Route exact path="/signin" render={() => <Signin {...props} />} />
			<PrivateRoute
				path="/userdashboard"
				component={() => <Dashboard {...props} />}
			/>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser,
		nextUserId: state.initUserId,
		users: state.users,
	};
};

const mapDispatchToProps = (dispatch) => ({
	SignUp: (newUser) => dispatch(SignUp(newUser)),
	UpdateId: () => dispatch(UpdateId()),
	SetCurrentUser: (user) => dispatch(SetCurrentUser(user)),
	RemoveCurrentUser: () => dispatch(RemoveCurrentUser()),
	AddStory: (newStory) => dispatch(AddStory(newStory)),
	updateStory: (updatedStory, userId) => dispatch(updateStory(updatedStory, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
