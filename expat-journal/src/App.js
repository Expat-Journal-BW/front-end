import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Link as SignLink } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import { connect } from "react-redux";
import { SignUp } from "./actions/signUpActions";

function App(props) {
	return (
		<div className="App">
			<Route exact path="/">
				<nav>
					<div className="nav-link">
						<SignLink
							to="/signup"
							style={{
								paddingLeft: 13,
								textDecoration: "none",
								color: "black",
							}}
						>
							Signup
						</SignLink>
						<SignLink
							to="/signin"
							style={{
								paddingLeft: 13,
								textDecoration: "none",
								color: "black",
							}}
						>
							Signin
						</SignLink>
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
		users: state.users,
	};
};

const mapDispatchToProps = (dispatch) => ({
	SignUp: (newUser) => dispatch(SignUp(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
