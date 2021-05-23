import { post } from "./apiCalls";
import {
	MENU_WIDTH,
	PUSH_ITEM_CART,
	DEL_ITEM_CART,
	COUNT_TOTAL,
	CHANGE_AMOUNT,
	SET_LOCATION,
	ADD_FILTER,
	REMOVE_FILTER,
	FETCH_PAPER,
	FETCH_HILZY,
	FETCH_FILTERS,
	FETCH_AROMA,
	FETCH_MASHINE,
	FETCH_SEARCH,
} from "./types";

import {
	wholePaper,
	wholeHilzy,
	wholeFilters,
	wholeAroma,
	wholeMashine,
} from "./queryItems";

export const fetchItems = (type, filters, search) => {
	return async (dispatch) => {
		let result;
		let beautified;

		switch (type) {
			case "paper":
				result = await post(wholePaper(filters));
				beautified =
					result && result.data.filterPaper
						? result.data.filterPaper.paper
						: [];
				!search
					? dispatch({ type: FETCH_PAPER, payload: beautified })
					: dispatch({ type: FETCH_SEARCH, payload: beautified });
				return;

			case "hilzy":
				result = await post(wholeHilzy(filters));
				beautified =
					result && result.data.filterHilzy
						? result.data.filterHilzy.hilzy
						: [];
				!search
					? dispatch({ type: FETCH_HILZY, payload: beautified })
					: dispatch({ type: FETCH_SEARCH, payload: beautified });
				return;

			case "filter":
				result = await post(wholeFilters(filters));
				beautified =
					result && result.data.filterFilters
						? result.data.filterFilters.filters
						: [];
				!search
					? dispatch({ type: FETCH_FILTERS, payload: beautified })
					: dispatch({ type: FETCH_SEARCH, payload: beautified });
				return;

			case "aroma":
				result = await post(wholeAroma(filters));
				beautified =
					result && result.data.filterAroma
						? result.data.filterAroma.aroma
						: [];
				!search
					? dispatch({ type: FETCH_AROMA, payload: beautified })
					: dispatch({ type: FETCH_SEARCH, payload: beautified });
				return;

			case "mashine":
				result = await post(wholeMashine(filters));
				beautified =
					result && result.data.filterMasine
						? result.data.filterMasine.mashine
						: [];
				!search
					? dispatch({ type: FETCH_MASHINE, payload: beautified })
					: dispatch({ type: FETCH_SEARCH, payload: beautified });
				return;
		}
	};
};

export const changeWidthMenu = (menuWidth) => {
	return (dispatch) => {
		dispatch({ type: MENU_WIDTH, payload: menuWidth });
	};
};

// const countTotal = () => {
// 					singleCartItem.amount >= 5
// 					? (price = singleCartItem.inBox)
// 					: (price = singleCartItem.inPack);
// 				console.log(price);
// }

export const addToCart = (itemCard, cart) => {
	return async (dispatch) => {
		const copyItemCard = { ...itemCard };
		if (!copyItemCard.availability) return;
		if (cart) {
			let isInCart = false;
			cart.map((cartItem, index) => {
				if (
					cartItem.id === copyItemCard.id &&
					cartItem.tag[0].tag === copyItemCard.tag[0].tag
				) {
					const newCart = [...cart];
					copyItemCard.availability && (newCart[index].amount += 1);
					dispatch({ type: CHANGE_AMOUNT, payload: newCart });
					dispatch({ type: COUNT_TOTAL });
					isInCart = true;
					return;
				}
			});
			if (!isInCart) {
				copyItemCard.availability && (copyItemCard.amount = 1);
				dispatch({ type: PUSH_ITEM_CART, payload: copyItemCard });
				dispatch({ type: COUNT_TOTAL });
			}
		} else {
			copyItemCard.availability && (copyItemCard.amount = 1);
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

export const addFilter = (filter) => {
	return (dispatch) => {
		dispatch({ type: ADD_FILTER, payload: filter });
	};
};

export const removeFilter = (filter) => {
	return (dispatch) => {
		dispatch({ type: REMOVE_FILTER, payload: filter });
	};
};
