/* eslint-disable no-case-declarations */
import { isDiscountAvailable } from "../utils";
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
	adminStoreDetails: {
		data: {
			itemsQuantity: 0,
			purchaseAmount: 0,
			discountAmount: 0,
			discounts: [],
		},
		isDataAvailable: false,
	},
};

export const appReducer = (state, { type, payload }) => {
	switch (type) {
		case actions.FETCH_PRODUCTS:
			return {
				...state,
				products: payload,
			};

		case actions.FETCH_CART:
			return {
				...state,
				cart: payload,
			};

		case actions.FETCH_DISCOUNTS:
			return {
				...state,
				discounts: payload,
				isDiscountAvailable: isDiscountAvailable(state),
			};

		case actions.FETCH_ADMIN_STORE_DETAILS:
			return {
				...state,
				adminStoreDetails: payload,
			};

		case actions.ADD_PRODUCT_TO_CART:
			const cartData = [
				...state.cart.items,
				...state.products.filter((product) => product.id === payload),
			];
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
				isDiscountAvailable: isDiscountAvailable(state),
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
				isDiscountAvailable: isDiscountAvailable(state),
			};

		case actions.VALIDATE_DISCOUNT:
			const applicableDiscount = state.discounts.find(
				(discount) => discount.code === payload
			);
			console.log(applicableDiscount);
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
