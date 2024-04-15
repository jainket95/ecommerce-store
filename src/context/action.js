import { useAppDispatchContext } from ".";
import {
	fetchAdminStoreDetails,
	fetchCart,
	fetchDiscounts,
	fetchProducts,
} from "../utils";
import { actions } from "./types";

export const useDataFetcher = () => {
	const dispatch = useAppDispatchContext();
	const getProducts = async () => {
		const data = await fetchProducts();

		dispatch({
			type: actions.FETCH_PRODUCTS,
			payload: data,
		});
	};

	const getCart = async () => {
		const data = await fetchCart();

		dispatch({
			type: actions.FETCH_CART,
			payload: data,
		});
	};

	const getDiscounts = async () => {
		const data = await fetchDiscounts();

		dispatch({
			type: actions.FETCH_DISCOUNTS,
			payload: data,
		});
	};

	const getAdminStore = async () => {
		const data = await fetchAdminStoreDetails();

		dispatch({
			type: actions.FETCH_ADMIN_STORE_DETAILS,
			payload: data,
		});
	};

	return {
		getProducts,
		getCart,
		getDiscounts,
		getAdminStore,
	};
};
