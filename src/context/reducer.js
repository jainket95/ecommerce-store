import { actions } from "./types";

export const initialState = {
	products: [],

	cart: {
		items: [],
		totalPrice: 0,
		totalQuantity: 0,
		totalDiscount: 0,
		total: 0,
	},

	orders: [],
	discounts: [],
	isDiscountAvailable: false,
};

export const appReducer = (state, { type, payload }) => {
	switch (type) {
		case actions.FETCH_PRODUCTS:
			return {
				...state,
				products: payload,
			};

		// case actions.cart:
		// 	return {
		// 		...state,
		// 		cart: payload,
		// 	};

		case actions.ADD_PRODUCT_TO_CART:
			const cartData = [
				...state.cart.items,
				...state.products.filter((product) => product.id === payload),
			];
			let nextOrderIndex = state.orders.length + 1;
			const isDiscountAvailable =
				state.discounts.findIndex(
					(discount) => discount.index === nextOrderIndex
				) >= 0;
			const cartTotal = cartData.reduce(
				(total, product) => total + Number(product.price),
				0
			);
			return {
				...state,
				cart: {
					...state.cart,
					items: cartData,
					total: cartTotal,
					totalPrice: cartTotal,
					totalQuantity: cartData.length,
				},
				isDiscountAvailable,
			};

		case actions.CART_CHECKOUT:
			return {
				...state,
				orders: [...state.orders, { id: payload, ...state.cart }],
				cart: {
					items: [],
					totalPrice: 0,
					totalQuantity: 0,
					totalDiscount: 0,
					total: 0,
				},
				isDiscountAvailable: false,
			};

		case actions.GENERATE_DISCOUNT:
			return {
				...state,
				discounts: [...state.discounts, payload],
			};

		case actions.VALIDATE_DISCOUNT:
			const applicableDiscount = state.discounts.find(
				(discount) => discount.code === payload
			);
			const cartTotalDiscount =
				(state.cart.total * applicableDiscount.value) / 100;
			return {
				...state,
				cart: {
					...state.cart,
					totalDiscount: cartTotalDiscount,
					total: state.cart.total - cartTotalDiscount,
					discount: applicableDiscount,
				},
			};

		default:
			return state;
	}
};
