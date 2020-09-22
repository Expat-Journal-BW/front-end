export const UPDATE_STORY = "UPDATE_STORY"


export const updateStory = (updatedStory, userId) => {

    return {
        type: UPDATE_STORY,
        payload: updatedStory,
        id: userId
    };
};