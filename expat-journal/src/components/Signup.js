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
//import { fakeAuth } from "../hooks/axiosWithAuth";

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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function SignUp(props) {
	console.log("SignUp props:", props);
	const classes = useStyles();

	const [checked, setChecked] = useState(false);

	const [firstName, setFirstName, handleFirstName] = useInput("");
	const [lastName, setLastName, handleLastName] = useInput("");
	const [email, setEmail, handleEmail] = useInput("");
	const [password, setPassword, handlePassword] = useInput("");

	const signUpDetails = {
		user: {
			id: props.nextUserId,
			credentials: {
				email: email,
				password: password,
			},
			nameOfUser: {
				firstName: firstName,
				lastName: lastName,
			},
			posts: [],
		},
	};

	const clearInputs = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const credCheck =
			(email && password && firstName && lastName) === "" ? true : false;
		if (credCheck === true) {
			window.alert("Please fill in entire form!");
		} else {
			clearInputs();
			setTimeout(() => {
				props.SignUp(signUpDetails);
				props.SetCurrentUser(signUpDetails);
				props.UpdateId();
			}, 1000);
		}
	};

	// if () {
	// 	return <Redirect to="/userdashboard" />;
	// }

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
								value={firstName}
								onChange={(e) => handleFirstName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
								value={lastName}
								onChange={(e) => {
									handleLastName(e.target.value);
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								value={email}
								onChange={(e) => handleEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
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
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										value={checked}
										onChange={() => setChecked(!checked)}
										color="primary"
									/>
								}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link to="/signin" className="Link">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright linkText="Expat Journal" />
			</Box>
		</Container>
	);
}

export default SignUp;
