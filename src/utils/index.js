export const fetchProducts = async () => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_API_URL}/products`
	);
	const data = await response.json();
	if (data.isSuccess) {
		return data.data;
	} else {
		return [];
	}
};

export const fetchCart = async () => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_API_URL}/getCart`
	);
	const data = await response.json();
	if (data.isSuccess) {
		return data.data;
	} else {
		return [];
	}
};

export const fetchDiscounts = async () => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_API_URL}/getDiscounts`
	);
	const data = await response.json();
	if (data.isSuccess) {
		return data.data;
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
	if (data.isSuccess) {
		alert("Product added successfully");
	}
};

export const cartCheckout = async (id, discountCode) => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_API_URL}/cartCheckout`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id, discountCode }),
		}
	);
	const data = await response.json();
	if (data.isSuccess) {
		alert("Order placed successfully");
	}
};

export const generateDiscount = async (discount) => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_API_URL}/generateDiscount`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ discount }),
		}
	);
	const data = await response.json();
	if (data.isSuccess) {
		alert("Discount code generated successfully");
	}
};

export const validateDiscount = async (discountCode) => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_API_URL}/validateDiscount`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ discountCode }),
		}
	);
	const data = await response.json();
	if (data.isSuccess) {
		alert("Discount code validated");
	}
};

export const fetchAdminStoreDetails = async () => {
	const response = await fetch(
		`${import.meta.env.VITE_BACKEND_API_URL}/getAdminStoreDetails`
	);
	const data = await response.json();
	if (data.isSuccess) {
		return data.data;
	} else {
		return {};
	}
};

export const isDiscountAvailable = (state = {}) => {
	const { discounts, orders } = state;
	return discounts.findIndex((item) => item.index === orders.length + 1) >= 0;
};
