import { MENU_WIDTH } from "../types";

const initialState = {
	menuWidth: 220,
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case MENU_WIDTH:
			return { ...state, menuWidth: action.payload };

		default:
			return state;
	}
};
