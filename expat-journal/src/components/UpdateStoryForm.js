import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {axiosWithAuth} from "../hooks/axiosWithAuth";
import {connect} from "react-redux";

const UpdateStoryForm = props => {

     const {id} = useParams();
    
     const initialState={
            date: "",
            title: "",
            location: "",
            story: "",
            //photo: []
        };

      const {push} = useHistory();
      const [story, setStory] = useState(initialState);

      
      useEffect(()=> {
          axiosWithAuth()
          .get(`{id}`)
          .then((res)=> {
            setStory(res.data)
            console.log("this is the story we're grabbing to update?:", res.data)
          })
          .catch((err)=> {
              console.log("Damn! An error while grabbing our story:", err)
          })

      }, [id])



      const ChangeHandler = e => {
          e.persist();
          let value= e.target.value

          setStory({
              ...story,
              [e.target.name]: value
          });
      };

      const SaveChange = e =>{
          e.preventDefault()
          axiosWithAuth()
          .put(`{id}`)
          .then((res)=> {
              setStory(res)
              push(`/stories`)
              console.log ("this is your edit being saved in UpdateStoryForm:", res)
          })
          .catch((err)=>{
              console.log("NOOOOOOOO from editing your story in UpdateStoryForm:", err)
          })

      };

      const DeleteStory = e =>{
          axiosWithAuth()
          .delete(``)
          .then((res)=> {
              console.log("deleting this story from updateStoryForm:", res)
          })
          .catch((err)=>{
              console.log("Why God, why? from delete function in updatestory:", err)
          })

      };

    return(

        <div>
                <form>
                    <div>
                        <input type = "date"
                            name = "date"
                            placeholder = "date"
                            value = {story.date}
                            onChange = {ChangeHandler}>
                        </input>
                    </div>
                    <div>
                        <input type = "textarea"
                            name = "title"
                            placeholder = "Name your story"
                            value = {story.title}
                            onChange = {ChangeHandler}>
                        </input>
                    </div>
                    <div>
                        <input type = "text"
                            name = "location"
                            placeholder = "Name your story"
                            value = {story.location}
                            onChange = {ChangeHandler}>
                        </input>
                    </div>
                    <div>
                        <input type = "textarea"
                            name = "story"
                            placeholder = "Tell us your story"
                            value = {story.story}
                            onChange = {ChangeHandler}>
                        </input>
                    </div>
                    
                    <button onClick= {SaveChange}>Save Changes</button>
                    <button onClick= {DeleteStory}>Delete</button>
                    {/* <button type= "submit">Publish Privately</button> */}
                </form>
            </div>
        




    );





};

const mapStateToProps = (state) => {
    return {
        user: state.user.data,
    };
};

export default connect(mapStateToProps)(UpdateStoryForm);