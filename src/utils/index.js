export const fetchProducts = async () => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_API_URL}/products`
	);
	const data = await response.json();
	if (data?.length) {
		return data;
	} else {
		return [];
	}
};

export const addProductToCart = async (id) => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_API_URL}/addProductToCart`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id }),
		}
	);
	const data = await response.json();
	if (data?.length) {
		return data;
	} else {
		return [];
	}
};

export const cartCheckout = async (id) => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_API_URL}/cartCheckout`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id }),
		}
	);
	const data = await response.json();
	if (data?.length) {
		return data;
	} else {
		return [];
	}
};
