import {
	PUSH_ITEM_CART,
	DEL_ITEM_CART,
	COUNT_TOTAL,
	CHANGE_AMOUNT,
} from "../types";

const initialState = {
	cart: [],
	total: 0,
	amount: 0,
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case PUSH_ITEM_CART:
			return {
				...state,
				cart: state.cart.concat(action.payload),
			};

		case DEL_ITEM_CART:
			const newCart = [...state.cart];
			newCart.splice(action.payload, 1);
			return {
				...state,
				cart: newCart,
			};

		case COUNT_TOTAL:
			let counter = 0;
			let count = 0;
			let price;
			state.cart.map((singleCartItem) => {
				singleCartItem.amount >= singleCartItem.wholesaleCount
					? (price =
							singleCartItem.wholesalePrice / singleCartItem.wholesaleCount)
					: (price = singleCartItem.retailPrice);
				counter += price * singleCartItem.amount;
				count += singleCartItem.amount;
			});
			return {
				...state,
				total: Math.ceil(counter),
				amount: count,
			};

		case CHANGE_AMOUNT:
			return { ...state, cart: action.payload };

		default:
			return state;
	}
};
