import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useInput } from "../hooks/useInput";
import Copyright from "./Copyright";

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
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function AddStoryForm(props) {
	const classes = useStyles();

	const [date, setDate, handleDate] = useInput(Date.now());
	const [title, setTitle, handleTitle] = useInput("");
	const [location, setLocation, handleLocation] = useInput("");
	const [story, setStory, handleStory] = useInput("");

	const clearInputs = () => {
		setDate("");
		setTitle("");
		setLocation("");
		setStory("");
	};

	const newStory = {
		date: date,
		title: title,
		location: location,
		story: story,
	};

	const addStory = (e) => {
		e.preventDefault();
		const credCheck = () => {
			let check;
			if ((title && location && story) === "") {
				check = true;
			} else {
				check = false;
			}
			return check;
		};
		if (credCheck === true) {
			window.alert("Please fill in entire form!");
		} else {
			window.alert("HI!");
			console.log(newStory);
			clearInputs();
			setTimeout(() => {
				props.setAdding(false);
				//fakeAuth.authenticate();
			}, 500);
		}
		//axiosWithAuth()
		//.post(``, state)
		// .then((res)=> {
		//     this.props.history.push("/stories")
		//     console.log("this is your data thats being posted from AddStory:", res)
		// })
		// .catch((err)={
		//     console.log("Oh shit! You've got an error trying to update state in Add Story", err)
		// })
	};

	return (
		// <div>
		// 	<form onSubmit={addStory}>
		// 		<div>
		// 			<input
		// 				type="date"
		// 				name="date"
		// 				placeholder="date"
		// 				value={date}
		// 				onChange={(e) => handleDate(e.target.value)}
		// 			></input>
		// 		</div>
		// 		<div>
		// 			<input
		// 				type="textarea"
		// 				name="title"
		// 				placeholder="Name your story"
		// 				value={title}
		// 				onChange={(e) => handleTitle(e.target.value)}
		// 			></input>
		// 		</div>
		// 		<div>
		// 			<input
		// 				type="text"
		// 				name="location"
		// 				placeholder="Location"
		// 				value={location}
		// 				onChange={(e) => handleLocation(e.target.value)}
		// 			></input>
		// 		</div>
		// 		<div>
		// 			<input
		// 				type="textarea"
		// 				name="story"
		// 				placeholder="Tell us your story"
		// 				value={story}
		// 				onChange={(e) => handleStory(e.target.value)}
		// 			></input>
		// 		</div>

		// 		<button type="submit">Publish</button>
		// 		{/* <button type= "submit">Publish Privately</button> */}
		// 	</form>
		// </div>

		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} onSubmit={addStory} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								autoFocus
								type="date"
								label="Date"
								name="date"
								variant="outlined"
								id="date"
								InputLabelProps={{
									shrink: true,
								}}
								value={date}
								onChange={(e) => handleDate(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="Title"
								name="title"
								value={title}
								onChange={(e) => {
									handleTitle(e.target.value);
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="location"
								label="Location"
								name="location"
								autoComplete="location"
								value={location}
								onChange={(e) => handleLocation(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="story"
								label="Story"
								type="story"
								id="story"
								value={story}
								onChange={(e) => handleStory(e.target.value)}
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
						Publish
					</Button>
				</form>
			</div>
			<Box mt={5}>
				<Copyright linkText="Expat Journal" />
			</Box>
		</Container>
	);
}

export default AddStoryForm;
