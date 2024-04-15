import { useAppContext } from "../../context";
import CartItem from "../../components/CartItem";

import { useNavigate, useSearchParams } from "react-router-dom";
import Summary from "../../components/Summary";

const Order = () => {
	let { orders } = useAppContext();

	const [orderParams] = useSearchParams();
	const navigate = useNavigate();

	const order =
		orders.find((order) => order.id === orderParams.get("id")) || {};
	const { items, total } = order;

	const handleContinueShopping = () => {
		navigate("/");
	};

	const goToAdminPage = () => {
		navigate("/admin");
	};

	return (
		<div className="w-full flex flex-col justify-start items-start">
			<h1 className="text-2xl font-normal uppercase mb-4">Order Summary</h1>
			<div className="w-full flex flex-row-reverse justify-start items-start">
				<div className="w-1/2 flex flex-col justify-start items-start gap-5">
					{items.length > 0 &&
						items.map((cart) => <CartItem key={cart.id} {...cart} />)}
				</div>
				{orders.length > 0 && total > 0 && (
					<div className="w-1/2 flex flex-col justify-start items-start mr-10">
						<Summary summaryData={order} />
						<div className="w-full flex justify-between items-center">
							<button
								className="w-full bg-gray-200 text-black p-4 rounded-md mr-4"
								onClick={handleContinueShopping}>
								Continue Shopping
							</button>
							<button
								className="w-full bg-gray-200 text-black p-4 rounded-md"
								onClick={goToAdminPage}>
								Go to Admin Page
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Order;
