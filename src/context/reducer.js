import { actions } from "./types";

export const initialState = {
	products: {
		data: [],
		isPending: true,
		error: null,
	},

	cart: {
		data: [],
		count: 0,
		total: 0,
	},
};

export const appReducer = (state, { type, payload }) => {
	switch (type) {
		case actions.FETCH_PRODUCTS:
			return state;

		default:
			return state;
	}
};
