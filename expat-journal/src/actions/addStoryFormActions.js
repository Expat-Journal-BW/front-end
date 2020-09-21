export const ADD_STORY = "ADD_STORY";

export const AddStory = (story, userId) => {
	return {
		type: ADD_STORY,
		payload: story,
		id: userId,
	};
};
