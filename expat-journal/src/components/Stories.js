<<<<<<< HEAD
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
=======
import React from "react";
import {axiosWithAuth} from "../hooks/axiosWithAuth";
import {connect} from "react-redux";
import {useInput} from "../hooks/useInput"

function Stories(props){
   

    // componentDidMount(){
    //     this.getStories();
    // }

    getStories = (e) => {
        e.preventDefault()
        axiosWithAuth()
        console.log("These are the props from stories component:", props)
        setTimeout(()=> {
            window.alert("You're in Stories!");
        }, 500);
        // .get(``)
        // .then((res)=> {
        //     console.log("these are stories from Stories.js:", res)
        //     this.setState({
        //         ...this.state,
        //         stories: res
        //     })
        // })
        // .catch((err)=> {
        //     console.log( "My world is ending bc there's an error from getStories:", err)
        // })

        // +++CODE INSIDE AXIOS CALL NEEDS CONVERTING FROM CLASS TO FUNCTIONAL+++
        // +++CHECK RETURN CODES SYNTAX TO MAKE SURE ITS CORRECT
    };

    

        return(

            <div>Hey From Stories Page!</div>

            // <div>{user.stories.map((story)=>(
            //     <p key = {story.id}>{story.title}</p>
            // ))}

            // </div>
        )
    




}

const mapStateToProps = (state) => {
    return {
        user: state.user.data
    };
};
export default connect(mapStateToProps)(Stories);
>>>>>>> 3a85355e1f2e7b933ffb2855e8d6cb50a2bb4ced
