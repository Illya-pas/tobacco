import { MENU_WIDTH, SET_LOCATION } from "../types";

const initialState = {
	menuWidth: 220,
	location: "",
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case MENU_WIDTH:
			return { ...state, menuWidth: action.payload };

		case SET_LOCATION:
			return { ...state, location: action.payload };

		default:
			return state;
	}
};
