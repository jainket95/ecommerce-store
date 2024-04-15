import { useAppContext, useAppDispatchContext } from "../../context";
import CartItem from "../../components/CartItem";
import { actions } from "../../context/types";
import { cartCheckout, validateDiscount } from "../../utils";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
	let {
		cart: { items: cartData, total, totalPrice, totalDiscount },
		isDiscountAvailable,
	} = useAppContext();

	// const [cart, setCart] = useState(cartData || []);
	const [discountCode, setDiscountCode] = useState("");

	const dispatch = useAppDispatchContext();
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (cart.length === 0) {
	// 		fetchCart().then((cart) => {
	// 			setCart(cart);
	// 			dispatch({
	// 				type: actions.FETCH_CART,
	// 				payload: cart,
	// 			});
	// 		});
	// 	}
	// }, [cart, products?.length, dispatch]);

	const handleDiscountApply = async () => {
		setDiscountCode("");
		await validateDiscount(discountCode);
		dispatch({
			type: actions.VALIDATE_DISCOUNT,
			payload: discountCode,
		});
	};

	const handleDiscountChange = (e) => {
		if (!isDiscountAvailable) return;
		e.preventDefault();
		setDiscountCode(e.target.value);
	};

	const handleCartCheckout = async () => {
		const orderId = v4();
		let checkoutPostData = { id: orderId };

		if (discountCode && isDiscountAvailable) {
			checkoutPostData.discountCode = discountCode;
		}

		await cartCheckout(checkoutPostData);
		dispatch({
			type: actions.CART_CHECKOUT,
			payload: orderId,
		});
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
								Cart Summary
							</p>
							<div className="w-full flex justify-between items-center mb-2">
								<p className="text-xl font-normal uppercase ">cart total :</p>
								<p className="text-xl font-semibold">Rs {totalPrice}</p>
							</div>
							<div className="w-full flex justify-between items-center mb-2">
								<p className="text-xl font-normal uppercase">shipping :</p>
								<p className="text-xl font-semibold">Rs 0</p>
							</div>
							<div className="w-full flex justify-between items-center mb-2">
								<p className="text-xl font-normal uppercase ">Discount :</p>
								<p className="text-xl font-semibold">Rs {totalDiscount}</p>
							</div>
							<div className="w-full flex justify-between items-center my-2 pt-4 border-t border-gray-300">
								<p className="text-xl font-normal uppercase ">net total :</p>
								<p className="text-xl font-semibold">Rs {total}</p>
							</div>
						</div>
						<div
							className={`w-full flex flex-col justify-start items-start border border-gray-400 p-4 rounded-md mb-10 ${
								!isDiscountAvailable ? "opacity-45" : "opacity-100"
							}`}>
							<p className="w-full text-2xl font-normal uppercase mb-4 border-b border-gray-400 py-2">
								Discount
							</p>
							<div className="w-full flex justify-center items-center mb-2">
								<input
									disabled={!isDiscountAvailable}
									className="w-full bg-gray-600 rounded-md p-3 mr-4"
									type="text"
									name="code"
									value={discountCode}
									onChange={handleDiscountChange}
									placeholder="Discount Code"
								/>
								<button
									disabled={!isDiscountAvailable}
									className="w-1/5 bg-gray-200 text-black p-3 rounded-md "
									onClick={handleDiscountApply}>
									Apply
								</button>
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
