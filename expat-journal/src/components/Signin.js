import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { Link as SignLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "./Copyright";

import { useInput } from "../hooks/useInput";
import { fakeAuth } from "../hooks/axiosWithAuth";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const shallowEqual = (object1, object2) => {
	const keys1 = Object.keys(object1);
	const keys2 = Object.keys(object2);

	if (keys1.length !== keys2.length) {
		return false;
	}

	for (let key of keys1) {
		if (object1[key] !== object2[key]) {
			return false;
		}
	}

	return true;
};

function SignIn(props) {
	const classes = useStyles();

	const [loggedIn, setLoggedIn] = useState(false);
	const [remembered, setRemembered] = useState(false);

	const [email, setEmail, handleEmail] = useInput("");
	const [password, setPassword, handlePassword] = useInput("");

	const handleSubmit = (e) => {
		e.preventDefault();
		//This is where the user's credentials are being
		//compared to the sign in form's state
		//using props.user.credentials.signin as a placeholder
		const userCredMatch = props.user.credentials.signin; //Can adjust later
		let signInCreds = {
			email: email,
			password: password,
		};
		const authUser = shallowEqual(signInCreds, userCredMatch);
		setTimeout(() => {
			if (!authUser) {
				window.alert("Try again");
				setEmail("");
				setPassword("");
			} else {
				window.alert("Success!");
				fakeAuth.authenticate(() => {
					console.log("Auth?:", fakeAuth.isAuthenticated);
					localStorage.setItem("token", props.user.token);
					setLoggedIn(true);
				});
			}
		}, 500);
	};

	if (fakeAuth.isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={(e) => handleEmail(e.target.value)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => handlePassword(e.target.value)}
					/>
					<FormControlLabel
						control={
							<Checkbox
								value={remembered}
								onChange={(e, checked) => {
									setRemembered(checked);
								}}
								color="primary"
							/>
						}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<SignLink to="/src/Components/Signup" variant="body2">
								{"Don't have an account? Sign Up"}
							</SignLink>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright text="Expat Journal" />
			</Box>
		</Container>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(SignIn);
