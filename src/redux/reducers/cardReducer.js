import {
	ADD_FILTER,
	REMOVE_FILTER,
	FETCH_PAPER,
	FETCH_HILZY,
	FETCH_FILTERS,
	FETCH_AROMA,
	FETCH_MASHINE,
	FETCH_SEARCH,
} from "../types";

const initialState = {
	search: [],
	paper: [],
	hilzy: [],
	filter: [],
	aroma: [],
	mashine: [],
	total: 0,
	filters: [
		{
			name: "paper",
			filters: [],
		},
		{
			name: "hilzy",
			filters: [],
		},
		{
			name: "filter",
			filters: [],
		},
		{
			name: "aroma",
			filters: [],
		},
		{
			name: "mashine",
			filters: [],
		},
	],
};

export const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SEARCH:
			// let copySearch;
			// let itemID = action.payload[0] && action.payload[0].id;

			// copySearch.map((searchItem) => {
			// 	if (searchItem.id === itemID) {
			// 		copySearch = [...state.search]
			// 		return copySearch;
			// 	} else {
			// 		copySearch.concat(action.payload ? action.payload[0] : [1]);
			// 		return copySearch;
			// 	}
			// });
			// console.log(copySearch);
			// console.log(action.payload[0] && action.payload[0].id);
			// return { ...state, search: copySearch };

			return { ...state, search: state.search.concat(action.payload) };

		case FETCH_PAPER:
			return { ...state, paper: action.payload };

		case FETCH_HILZY:
			return { ...state, hilzy: action.payload };

		case FETCH_FILTERS:
			return { ...state, filter: action.payload };

		case FETCH_AROMA:
			return { ...state, aroma: action.payload };

		case FETCH_MASHINE:
			return { ...state, mashine: action.payload };

		case ADD_FILTER:
			let copiedFilters = [...state.filters];
			copiedFilters.map((fil, index) => {
				if (fil.name === action.payload.type) {
					fil.filters.push(action.payload.name);
					copiedFilters.splice(index, 1, fil);
				}
			});
			return { ...state, filters: copiedFilters };

		case REMOVE_FILTER:
			let copyFilters = [...state.filters];
			copyFilters.map((fil, index) => {
				if (fil.name === action.payload.type) {
					fil.filters.map((lftr, index) => {
						if (lftr === action.payload.name) {
							fil.filters.splice(index, 1);
						}
					});

					copyFilters.splice(index, 1, fil);
				}
			});
			return { ...state, filters: copyFilters };

		default:
			return state;
	}
};
