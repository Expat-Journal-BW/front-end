import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Link as SignLink } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

export default function App() {
	return (
		<div className="App">
			<nav>
				<div className="nav-link">
					<SignLink
						to="/signup"
						style={{ paddingLeft: 13, textDecoration: "none", color: "black" }}
					>
						Signup
					</SignLink>
					<SignLink
						to="/signin"
						style={{ paddingLeft: 13, textDecoration: "none", color: "black" }}
					>
						Signin
					</SignLink>
				</div>
			</nav>
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/signin" component={Signin} />
			<PrivateRoute path="/userdashboard" component={Dashboard} />
		</div>
	);
}
