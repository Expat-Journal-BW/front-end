export const ADD_STORY = "ADD_STORY";

export const AddStory = (story, user) => {
	return {
		type: ADD_STORY,
		payload: story,
		id: user.id,
	};
};
