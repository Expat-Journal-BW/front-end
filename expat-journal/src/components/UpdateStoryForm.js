import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import  axiosAuth  from "../hooks/axiosWithAuth";
import { connect } from "react-redux";
import {useInput} from "../hooks/useInput";

const UpdateStoryForm = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const [date, setDate, handleDate] = useInput(Date.now());
    const [title, setTitle, handleTitle] = useInput("");
    const [location, setLocation, handleLocation] = useInput("");
    const [story, setStory, handleStory] = useInput("");
    
	
	

	useEffect(() => {
		axiosAuth()
			.get(`{id}`)
			.then((res) => {
				setStory(res.data);
				console.log("this is the story we're grabbing to update?:", res.data);
			})
			.catch((err) => {
				console.log("Damn! An error while grabbing our story:", err);
			});
	}, [id]);

	const ChangeHandler = (e) => {
		e.persist();
		let value = e.target.value;

		setStory({
			...story,
			[e.target.name]: value,
		});
	};

	const SaveChange = (e) => {
		e.preventDefault();
		axiosAuth()
			.put(`{id}`)
			.then((res) => {
				setStory(res);
				push(`/stories`);
				console.log("this is your edit being saved in UpdateStoryForm:", res);
			})
			.catch((err) => {
				console.log(
					"NOOOOOOOO from editing your story in UpdateStoryForm:",
					err
				);
			});
    };
    
    const Delete = (e) => {
        e.preventDefault()
        axiosAuth()
        .delete(`{id}`)
        .then((res)=> {
            console.log("res",res)
        })
        .catch((err)=> {
            console.log("err", err)
        })
    }

	return (
		<div>
			<form>
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
				<button onClick={SaveChange}>Save Changes</button>
				{/* <button type= "submit">Publish Privately</button> */}
			</form>
		</div>
	);
};

export default UpdateStoryForm;
