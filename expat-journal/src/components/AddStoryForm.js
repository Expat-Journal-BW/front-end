<<<<<<< HEAD
import React, { useEffect, useState } from "react";
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
	useEffect(() => {
		console.log("ASF props:", props);
	}, [props]);
	const classes = useStyles();

	const [upload, setUpload] = useState([]);
	const [images, setImages] = useState([]);
	const [imageUploadLoading, setImageUploadLoading] = useState(false);

=======
import React from "react";
//import {useHistory} from "react-router-dom";
//import axiosWithAuth from "../hooks/axiosWithAuth";
import { connect } from "react-redux";
import { useInput } from "../hooks/useInput";
function AddStoryForm(props) {
>>>>>>> 3a85355e1f2e7b933ffb2855e8d6cb50a2bb4ced
	const [date, setDate, handleDate] = useInput(Date.now());
	const [title, setTitle, handleTitle] = useInput("");
	const [location, setLocation, handleLocation] = useInput("");
	const [story, setStory, handleStory] = useInput("");
<<<<<<< HEAD

	const newStory = {
		date: date,
		title: title,
		location: location,
		story: story,
		photos: [...images],
	};

	const clearInputs = () => {
		setDate("");
		setTitle("");
		setLocation("");
		setStory("");
	};

	const handleImageUpload = (image) => {
		setImageUploadLoading(true);
		setImages([...images, image]);
		setTimeout(() => {
			setUpload([]);
			setImageUploadLoading(false);
		}, 1000);
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
			window.alert("Please fill out the entire form!");
		} else {
			setTimeout(() => {
				window.alert("Submitted.");
				props.AddStory(newStory, props.user.id);
				clearInputs();
				props.setAdding(false);
				//fakeAuth.authenticate();
			}, 500);
		}
=======
	const addStory = (e) => {
		e.preventDefault();
		console.log(props);
		setTimeout(() => {
			window.alert("HI!");
		}, 500);
>>>>>>> 3a85355e1f2e7b933ffb2855e8d6cb50a2bb4ced
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
<<<<<<< HEAD

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
						<Grid item xs={12} sm={6}>
							<Button variant="contained" component="label">
								Upload File
								<input
									type="file"
									style={{ display: "none" }}
									value={upload}
									onChange={(e) => {
										handleImageUpload(e.target.value);
									}}
								/>
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<span>{`${images.length} image(s) uploaded`}</span>
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
=======
	return (
		<div>
			<form onSubmit={addStory}>
				<div>
					<input
						type="date"
						name="date"
						placeholder="date"
						value={date}
						onChange={(e) => handleDate(e.target.value)}
					></input>
				</div>
				<div>
					<input
						type="textarea"
						name="title"
						placeholder="Name your story"
						value={title}
						onChange={(e) => handleTitle(e.target.value)}
					></input>
				</div>
				<div>
					<input
						type="text"
						name="location"
						placeholder="Location"
						value={location}
						onChange={(e) => handleLocation(e.target.value)}
					></input>
				</div>
				<div>
					<input
						type="textarea"
						name="story"
						placeholder="Tell us your story"
						value={story}
						onChange={(e) => handleStory(e.target.value)}
					></input>
				</div>
				<button type="submit">Publish</button>
				{/* <button type= "submit">Publish Privately</button> */}
			</form>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		user: state.user.data,
	};
};
export default connect(mapStateToProps)(AddStoryForm);















// import React from "react";
//import {useHistory} from "react-router-dom";
//import axiosWithAuth from "../hooks/axiosWithAuth";
// import {connect} from "react-redux";
// import {useInput} from "../hooks/useInput"




// function AddStoryForm (props){
    

//     const [date, setDate, handleDate] = useInput(Date.now());
//     const [title, setTitle, handleTitle] = useInput("");
//     const [location, setLocation, handleLocation] = useInput("");
//     const [story, setStory, handleStory] =useInput("");
//    // const [photo, setPhoto, handlePhoto] =useInput([]);



    

//     const addStory = (e) =>{
//         e.preventDefault()
//         // const userPost = {
//         //     date: date,
//         //     title: title,
//         //     location: location,
//         //     story: story
//         // }

//         // window.alert("useTimeout WORKS!")

//         useTimeout(()=>{
//             console.log("this is from timeout:", userPost)
//         }, 750)
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         addStory();
//     }


//     // addStory = (e)=> {
//     //     e.preventDefault();
//     //     console.log(this.state);
//         //axiosWithAuth()
//         //.post(``, this.state)
//         // .then((res)=> {
//         //     this.props.history.push("/stories")  
//         //     try redirect if props.history.push doesn't work 
//         //     console.log("this is your data thats being posted from AddStory:", res)
//         // })
//         // .catch((err)={
//         //     console.log("Oh shit! You've got an error trying to update state in Add Story", err)
//         // })
//     // }


    
        
//         return(
//             <div>
//                 <form onSubmit={addStory}>
//                     <div>
//                         <input type = "date"
//                             name = "date"
//                             placeholder = "date"
//                             value = {date}
//                             onChange = {(e) => handleDate(e.target.value)}>
//                         </input>
//                     </div>
//                     <div>
//                         <input type = "textarea"
//                             name = "title"
//                             placeholder = "Name your story"
//                             value = {title}
//                             onChange = {(e) => handleTitle(e.target.value)}>
//                         </input>
//                     </div>
//                     <div>
//                         <input type = "text"
//                             name = "location"
//                             placeholder = "Name your story"
//                             value = {location}
//                             onChange = {(e) => handleLocation(e.target.value)}>
//                         </input>
//                     </div>
//                     <div>
//                         <input type = "textarea"
//                             name = "story"
//                             placeholder = "Tell us your story"
//                             value = {story}
//                             onChange = {(e) =>handleStory(e.target.value)}>
//                         </input>
//                     </div>
                   

//                     <button type= "submit">Publish</button>
//                     {/* <button type= "submit">Publish Privately</button> */}
//                 </form>
//             </div>
//         )
    






// }

// const mapStateToProps = (state) => {
//     return{
//         user: state.user.data
//     }
// }

// export default connect(mapStateToProps)(AddStoryForm);


>>>>>>> 3a85355e1f2e7b933ffb2855e8d6cb50a2bb4ced
