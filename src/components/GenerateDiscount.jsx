import { useState } from "react";
import { useAppContext, useAppDispatchContext } from "../context";
import { v4 } from "uuid";
import { actions } from "../context/types";
import { generateDiscount } from "../utils";

const initDiscountState = (index) => ({
	code: "",
	value: "10",
	index,
});

const GenerateDiscount = () => {
	const { orders } = useAppContext();
	const dispatch = useAppDispatchContext();
	const [discount, setDiscount] = useState(
		initDiscountState(orders.length + 1)
	);

	const handleDiscountChange = (e) => {
		e.preventDefault();
		if (e.target.name === "index" && e.target.value <= orders.length) {
			alert("Please enter index value greater than orders length");
			return;
		}
		setDiscount({
			...discount,
			[e.target.name]: e.target.value,
		});
	};

	const handleGenerateDiscount = async () => {
		const discountId = v4();

		if (
			discount.code === "" ||
			discount.index === "" ||
			discount.value === ""
		) {
			alert("Please enter details for discount");
			return;
		}
		discount.index = Number(discount.index);
		const discountData = { id: discountId, ...discount };
		dispatch({
			type: actions.GENERATE_DISCOUNT,
			payload: discountData,
		});
		await generateDiscount(discountData);
		setDiscount(initDiscountState);
	};

	return (
		<div className="w-1/3 flex flex-col justify-start items-start mr-10">
			<h1 className="text-lg font-normal uppercase mb-4">Generate Discount</h1>
			<input
				className="w-full bg-gray-600 rounded-md p-3 mb-4"
				type="text"
				name="code"
				value={discount.code}
				onChange={handleDiscountChange}
				placeholder="Discount Code"
			/>
			<input
				className="w-full bg-gray-600 rounded-md p-3 mb-4"
				type="number"
				name="value"
				value={discount.value}
				onChange={handleDiscountChange}
				placeholder="Discount percentage"
			/>
			<input
				className="w-full bg-gray-600 rounded-md p-3 mb-4"
				type="number"
				name="index"
				value={discount.index}
				onChange={handleDiscountChange}
				placeholder="Order index on which the discount should work"
			/>

			<button
				className="w-full bg-gray-200 text-black p-4 rounded-md mb-4"
				onClick={handleGenerateDiscount}>
				Generate Discount
			</button>
		</div>
	);
};

export default GenerateDiscount;
