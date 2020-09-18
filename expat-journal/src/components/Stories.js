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