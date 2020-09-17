import React from "react";
//import axiosWithAuth from "../hooks/axiosWithAuth"

class AddStoryForm extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            date: Date.now(),
            title: "",
            story: "",
            id: "",
            //photo: []
        };

    }

    ChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }


    addStory = (e)=> {
        e.preventDefault();
        console.log(this.state);
        //axiosWithAuth()
        //.post(``, this.state)
        // .then((res)=> {
        //     console.log("this is your data thats being posted from AddStory:", res)
        // })
        // .catch((err)={
        //     console.log("Oh shit! You've got an error trying to update state in Add Story", err)
        // })
    }


    render(){
        const {date, title, story, id, } = this.state
        return(
            <div>
                <form onSubmit = {this.addStory}>
                    <div>
                        <input type = "number"
                            name = "date"
                            placeholder = "date"
                            value = {date}
                            onChange = {this.ChangeHandler}>
                        </input>
                    </div>
                    <div>
                        <input type = "textarea"
                            name = "title"
                            placeholder = "Name your story"
                            value = {title}
                            onChange = {this.ChangeHandler}>
                        </input>
                    </div>
                    <div>
                        <input type = "textarea"
                            name = "story"
                            placeholder = "Tell us your story"
                            value = {story}
                            onChange = {this.ChangeHandler}>
                        </input>
                    </div>
                    <div>
                        <input type = "number"
                            name = "id"
                            placeholder = "id"
                            value = {id}
                            onChange = {this.ChangeHandler}>
                        </input>
                    </div>
                    <button type= "submit">Publish Publically</button>
                    {/* <button type= "submit">Publish Privately</button> */}
                </form>
            </div>
        )
    }






}

export default AddStoryForm;