import React from "react";
import { useInput } from "../hooks/useInput";

function AddStoryForm(props) {
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

	const addStory = (e) => {
		e.preventDefault();
		console.log(props);

		const newStory = {
			date: date,
			title: title,
			location: location,
			story: story,
		};

		setTimeout(() => {
			clearInputs();
			window.alert("HI!");
			console.log(newStory);
		}, 500);
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

export default AddStoryForm;
