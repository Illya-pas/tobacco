import {
	FETCH_CARDS,
	MENU_WIDTH,
	PUSH_ITEM_CART,
	DEL_ITEM_CART,
	COUNT_TOTAL,
	CHANGE_AMOUNT,
	SET_LOCATION,
} from "./types";

// export const fetchItems = (itemsType) => {
// 	return async (dispatch) => {
// 		dispatch({ type: FETCH_CARDS, payload: {} });
// 	};
// };

export const changeWidthMenu = (menuWidth) => {
	return (dispatch) => {
		dispatch({ type: MENU_WIDTH, payload: menuWidth });
	};
};

export const addToCart = (itemCard, cart) => {
	return async (dispatch) => {
		const copyItemCard = { ...itemCard };
		// if (!copyItemCard.available) return;
		if (cart) {
			let isInCart = false;
			cart.map((cartItem, index) => {
				if (cartItem.id === copyItemCard.id) {
					const newCart = [...cart];
					copyItemCard.available && (newCart[index].amount += 1);
					dispatch({ type: CHANGE_AMOUNT, payload: newCart });
					dispatch({ type: COUNT_TOTAL });
					isInCart = true;
					return;
				}
			});
			if (!isInCart) {
				copyItemCard.available && (copyItemCard.amount += 1);
				dispatch({ type: PUSH_ITEM_CART, payload: copyItemCard });
				dispatch({ type: COUNT_TOTAL });
			}
		} else {
			copyItemCard.available && (copyItemCard.amount += 1);
			dispatch({ type: PUSH_ITEM_CART, payload: copyItemCard });
			dispatch({ type: COUNT_TOTAL });
		}
	};
};

export const changeAmount = (inputValue, cart, index) => {
	return async (dispatch) => {
		let counter = 0;
		const newCart = cart;
		inputValue === "" ? (inputValue = 0) : (inputValue = +inputValue);
		newCart[index].amount = inputValue;
		dispatch({ type: CHANGE_AMOUNT, payload: newCart });
		dispatch({ type: COUNT_TOTAL });
	};
};

export const delFromCart = (cart, index) => {
	return async (dispatch) => {
		let counter = 0;
		dispatch({ type: DEL_ITEM_CART, payload: index });
		dispatch({ type: COUNT_TOTAL });
	};
};

export const changeLocation = (location) => {
	return async (dispatch) => {
		dispatch({ type: SET_LOCATION, payload: location });
	};
};
