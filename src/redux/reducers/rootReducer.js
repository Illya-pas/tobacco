import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { cardReducer } from "./cardReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
	cards: cardReducer,
	app: appReducer,
	cart: cartReducer,
});
