import { useState } from "react";

export const useInput = (initVal) => {
	const [value, setValue] = useState(initVal);
	const handleChanges = (updatedValue) => {
		setValue(updatedValue);
	};
	return [value, setValue, handleChanges];
};
