import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import { connect } from "react-redux";
import { SignUp, UpdateId } from "./actions/signUpActions";
import { SignOut } from "./actions/dashboardActions";

function App(props) {
	console.log("App props:", props);
	return (
		<div className="App">
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
		nextUserId: state.initUserId,
		users: state.users,
	};
};

const mapDispatchToProps = (dispatch) => ({
	SignUp: (newUser) => dispatch(SignUp(newUser)),
	UpdateId: () => dispatch(UpdateId()),
	SignOut: () => dispatch(SignOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
