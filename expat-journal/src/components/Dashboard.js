import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { fakeAuth } from "../hooks/axiosWithAuth";
import Copyright from "./Copyright";
import Stories from "./Stories";
import AddStoryForm from "./AddStoryForm";

const useStyles = makeStyles((theme) => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

const Dashboard = (props) => {
	const classes = useStyles();

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

	useEffect(() => {
		console.log("Dashboard props:", props);
	}, []);

	if (!fakeAuth.isAuthenticated) {
		return <Redirect to="/signin" />;
	}

	if (adding) {
		return (
			<AddStoryForm
				setAdding={setAdding}
				AddStory={props.AddStory}
				user={props.currentUser.user}
			/>
		);
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<CameraIcon className={classes.icon} />
					<Typography variant="h6" color="inherit" noWrap>
						Expat Journal
					</Typography>
					<div className={classes.heroButtons}>
						<Grid container spacing={1} justify="center">
							<Grid item>
								<Button
									variant="contained"
									color="primary"
									onClick={(e) => handleSignOut(e)}
								>
									Sign Out
								</Button>
							</Grid>
						</Grid>
					</div>
				</Toolbar>
			</AppBar>
			<main>
				{/* Hero unit */}
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							{`${props.currentUser.user.nameOfUser.firstName}'s Journal`}
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							paragraph
						>
							Short user bio goes here
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button
										variant="contained"
										color="primary"
										onClick={(e) => add(e)}
									>
										Add Story
									</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">
										Remove Story
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				{/* End hero unit */}
				<Container className={classes.cardGrid} maxWidth="md">
					<Grid container spacing={4}>
						{props.currentUser.user.posts.map((posts) => {
							console.log("post:", posts);
							return (
								<Grid item key={posts} xs={12} sm={6} md={4}>
									<Card className={classes.card}>
										{/* <CardMedia
											className={classes.cardMedia}
											image={placeholderPhoto.photo.img}
											title={placeholderPhoto.photo.title}
										/> */}
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{posts.post.title}
											</Typography>
											<Typography>{posts.post.story}</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
											<Button size="small" color="primary">
												Edit
											</Button>
										</CardActions>
									</Card>
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p"
				>
					Something here to give the footer a purpose!
				</Typography>
				<Copyright linkText="Expat Journal" />
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
};

export default Dashboard;
