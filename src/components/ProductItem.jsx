import { useState } from "react";
import { useAppDispatchContext } from "../context";
import { actions } from "../context/types";
import { addProductToCart } from "../utils";

const ProductItem = ({ title, price, images, id }) => {
	const [isAdded, setIsAdded] = useState(false);
	const dispatch = useAppDispatchContext();

	const handleAdd = async (id) => {
		if (isAdded) return;
		//frontend
		setIsAdded(true);
		await addProductToCart(id);
		dispatch({
			type: actions.ADD_PRODUCT_TO_CART,
			payload: id,
		});
	};

	return (
		<div className="w-[25rem] h-[25rem] flex flex-col justify-start items-start p-4 border border-gray-400 rounded-lg">
			<div className="w-full h-[76%] flex justify-center items-center mb-4">
				{images[0] && (
					<img className="w-full h-full rounded-lg" src={images[0]} alt="" />
				)}
			</div>
			<p className="text-xl font-semibold mb-3">{title}</p>
			<div className=" w-full flex justify-between items-center">
				<p className="text-md font-normal">Rs {price}</p>
				<button
					className="bg-gray-200 text-black p-1 px-2 rounded-md"
					onClick={handleAdd.bind(null, id)}>
					{isAdded ? "Added" : "Add"}
				</button>
			</div>
		</div>
	);
};

export default ProductItem;
