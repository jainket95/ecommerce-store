import App from "../App";

import Home from "../pages/home";
import Cart from "../pages/cart";
import Order from "../pages/order";
import Admin from "../pages/admin";

export const routes = [
	{
		path: "/",
		element: <App />,

		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/order",
				element: <Order />,
			},
			{
				path: "/admin",
				element: <Admin />,
			},
		],
	},
];
