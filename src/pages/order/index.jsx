import { useAppContext } from "../../context";
import CartItem from "../../components/CartItem";

import { useNavigate, useSearchParams } from "react-router-dom";

const Order = () => {
	let { order: orderData } = useAppContext();

	const [orderParams] = useSearchParams();
	const navigate = useNavigate();

	const order =
		orderData.find((order) => order.id === orderParams.get("id")) || {};
	console.log(order);
	const { data, total } = order;

	const handleContinueShopping = () => {
		navigate("/");
	};

	return (
		<div className="w-full flex flex-col justify-start items-start">
			<h1 className="text-2xl font-normal uppercase mb-4">Order Summary</h1>
			<div className="w-full flex flex-row-reverse justify-start items-start">
				<div className="w-1/2 flex flex-col justify-start items-start gap-5">
					{data.length > 0 &&
						data.map((cart) => <CartItem key={cart.id} {...cart} />)}
				</div>
				{orderData.length > 0 && total > 0 && (
					<div className="w-1/2 flex flex-col justify-start items-start mr-10">
						<div className="w-full flex flex-col justify-start items-start border border-gray-400 p-4 rounded-md mb-10">
							<p className="w-full text-2xl font-normal uppercase mb-4 border-b border-gray-400 py-2">
								Order total Summary
							</p>
							<div className="w-full flex justify-between items-center">
								<p className="text-xl font-normal uppercase">shipping :</p>
								<p className="text-xl font-semibold">Rs 0</p>
							</div>
							<div className="w-full flex justify-between items-center mb-2">
								<p className="text-xl font-normal uppercase ">total :</p>
								<p className="text-xl font-semibold">Rs {total}</p>
							</div>
						</div>
						<button
							className="w-full bg-gray-200 text-black p-4 rounded-md"
							onClick={handleContinueShopping}>
							Continue Shopping
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Order;
