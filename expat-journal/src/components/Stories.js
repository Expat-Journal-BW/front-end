import React from "react";
import {axiosWithAuth} from "../hooks/axiosWithAuth";

class Stories extends React.Component{
    state = {
        stories: []
    };

    componentDidMount(){
        this.getStories();
    }

    getStories = () => {
        axiosWithAuth()
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
    }

    render(){

        return(

            <div>Hey From Stories Page!</div>

            // <div>{this.state.stories.map((story)=>(
            //     <p key = {story.id}>{story.title}</p>
            // ))}

            // </div>
        )
    }




}

export default Stories;