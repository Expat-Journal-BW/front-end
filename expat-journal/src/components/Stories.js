import React from "react";

const Stories = (props) => {
	console.log(props);

	// getStories = () => {
	// 	axiosWithAuth();
	// 	// .get(``)
	// 	// .then((res)=> {
	// 	//     console.log("these are stories from Stories.js:", res)
	// 	//     this.setState({
	// 	//         ...this.state,
	// 	//         stories: res
	// 	//     })
	// 	// })
	// 	// .catch((err)=> {
	// 	//     console.log( "My world is ending bc there's an error from getStories:", err)
	// 	// })
	// };

	return (
		<div>Hey From Stories Page!</div>

		// <div>{this.state.stories.map((story)=>(
		//     <p key = {story.id}>{story.title}</p>
		// ))}

		// </div>
	);
};

export default Stories;
