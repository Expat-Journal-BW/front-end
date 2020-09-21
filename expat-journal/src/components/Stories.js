import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 500,
		height: 450,
	},
}));

const Stories = (props) => {
	console.log("Stories props:", props);
	const [currentUser, setCurrentUser] = useState(props.user);
	console.log("currentUser:", currentUser);
	const classes = useStyles();

	return (
		<>
			<div>Hey From Stories Page!</div>

			<GridList cellHeight={160} className={classes.gridList} cols={3}>
				{currentUser.posts.map((post) => {
					return post.post.photos.map((photo, key) => {
						return (
							<GridListTile key={photo.img} cols={photo.cols || 1}>
								<img src={photo.img} alt={photo.title} />
							</GridListTile>
						);
					});
				})}
			</GridList>
		</>
	);
};

export default Stories;
