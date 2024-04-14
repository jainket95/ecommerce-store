import { useAppContext, useAppDispatchContext } from "../context";
import { useEffect } from "react";

import { actions } from "../context/types";

export const useProducts = () => {

		const response = await fetch(import.meta.env.API + "/products");
		const res = await response.json();
		return res;
	

	const dispatch = useAppDispatchContext();

	const {
		products: { data: productsData },
	} = useAppContext();

	useEffect(() => {
		if (productsData.length === 0) {
			dispatch({
				type: actions.FETCH_PRODUCTS,
				payload: fetchProducts(),
			});
		}
	}, [!!productsData?.length, dispatch, fetchProducts]);

	return ;
};
