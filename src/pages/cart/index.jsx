import { useAppContext, useAppDispatchContext } from "../../context";
import CartItem from "../../components/CartItem";
import { actions } from "../../context/types";
import { cartCheckout } from "../../utils";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	let {
		cart: { data: cartData, total },
	} = useAppContext();

	const dispatch = useAppDispatchContext();
	const navigate = useNavigate();

	const handleCartCheckout = async () => {
		const orderId = v4();
		dispatch({
			type: actions.CART_CHECKOUT,
			payload: orderId,
		});
		await cartCheckout(orderId);
		navigate("/order?id=" + orderId);
	};

	return (
		<div className="w-full flex flex-col justify-start items-start">
			<h1 className="text-2xl font-normal uppercase mb-4">Cart Summary</h1>
			<div className="w-full flex  justify-start items-start">
				<div className="w-1/2 flex flex-col justify-start items-start gap-5 mr-10">
					{cartData.length === 0 && <p className="">Add products in cart</p>}
					{cartData.length > 0 &&
						cartData.map((cart) => <CartItem key={cart.id} {...cart} />)}
				</div>
				{cartData.length > 0 && total > 0 && (
					<div className="w-1/2 flex flex-col justify-start items-start">
						<div className="w-full flex flex-col justify-start items-start border border-gray-400 p-4 rounded-md mb-10">
							<p className="w-full text-2xl font-normal uppercase mb-4 border-b border-gray-400 py-2">
								Cart Summary{" "}
							</p>
							<div className="w-full flex justify-between items-center mb-2">
								<p className="text-xl font-normal uppercase ">total :</p>
								<p className="text-xl font-semibold">Rs {total}</p>
							</div>
							<div className="w-full flex justify-between items-center">
								<p className="text-xl font-normal uppercase">shipping :</p>
								<p className="text-xl font-semibold">Rs 0</p>
							</div>
						</div>
						<button
							className="w-full bg-gray-200 text-black p-4 rounded-md"
							onClick={handleCartCheckout}>
							Checkout
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
