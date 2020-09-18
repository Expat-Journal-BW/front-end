import React from "react";
//import {useHistory} from "react-router-dom";
//import axiosWithAuth from "../hooks/axiosWithAuth";
import { connect } from "react-redux";
import { useInput } from "../hooks/useInput";
function AddStoryForm(props) {
	const [date, setDate, handleDate] = useInput(Date.now());
	const [title, setTitle, handleTitle] = useInput("");
	const [location, setLocation, handleLocation] = useInput("");
	const [story, setStory, handleStory] = useInput("");
	const addStory = (e) => {
		e.preventDefault();
		console.log(props);
		setTimeout(() => {
			window.alert("HI!");
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


