import { actions } from "./types";

export const initialState = {
	products: [],

	cart: {
		data: [],
		count: 0,
		total: 0,
	},

	order: [],
};

export const appReducer = (state, { type, payload }) => {
	switch (type) {
		case actions.FETCH_PRODUCTS:
			return {
				...state,
				products: payload,
			};

		case actions.ADD_PRODUCT_TO_CART:
			console.log(state);
			const cartData = [
				...state.cart.data,
				...state.products.filter((product) => product.id === payload),
			];

			return {
				...state,
				cart: {
					...state.cart,
					data: cartData,
					total: cartData.reduce(
						(total, product) => total + Number(product.price),
						0
					),
					count: cartData.length,
				},
			};

		case actions.CART_CHECKOUT:
			return {
				...state,
				order: [...state.order, { id: payload, ...state.cart }],
				cart: {
					data: [],
					count: 0,
					total: 0,
				},
			};

		default:
			return state;
	}
};
