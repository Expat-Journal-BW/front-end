import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "./Copyright";
import { useInput } from "../hooks/useInput";
import { fakeAuth } from "../hooks/axiosWithAuth";

import "./componentStyles.css";

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

function SignIn(props) {
	const classes = useStyles();

	const [loggedIn, setLoggedIn] = useState(false);
	const [remembered, setRemembered] = useState(false);

	const [email, setEmail, handleEmail] = useInput("");
	const [password, setPassword, handlePassword] = useInput("");

	const signInCreds = {
		email: email,
		password: password,
	};

	const clearInputs = () => {
		setEmail("");
		setPassword("");
	};

	const handleAuthCheck = (obj) => {
		return props.users.some((user, key) => {
			return (
				user.user.credentials.email === obj.email &&
				user.user.credentials.password === obj.password
			);
		});
	};
	const handleCurrUserCheck = (users, userCheck) => {
		return users.find((user, key) => {
			let match =
				user.user.credentials.email === userCheck.email &&
				user.user.credentials.password === userCheck.password;
			if (match) {
				return users[key];
			}
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const authUser = handleAuthCheck(signInCreds);
		const currUser = handleCurrUserCheck(props.users, signInCreds);
		console.log("currUser:", currUser);
		if (!authUser) {
			window.alert("Error: Authorized?: " + loggedIn + ".\nTry again");
			clearInputs();
		} else {
			window.alert("Success!");
			setTimeout(() => {
				fakeAuth.authenticate();
				props.SetCurrentUser(currUser);
				setLoggedIn(true);
			}, 1000);
		}
	};

	if (fakeAuth.isAuthenticated) {
		return <Redirect to="/userdashboard" />;
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
								onChange={() => {
									setRemembered(!remembered);
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
							<Link to="#" className="Link">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to="/signup" className="Link">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright linkText="Expat Journal" />
			</Box>
		</Container>
	);
}

export default SignIn;
