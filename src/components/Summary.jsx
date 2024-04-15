/* eslint-disable react/prop-types */
import { useAppContext } from "../context";

const Summary = ({ summaryData }) => {
	let { cart } = useAppContext();
	let data = summaryData;
	if (!summaryData) {
		data = cart;
	}

	const { total, totalPrice, totalDiscount, totalQuantity } = data;

	return (
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
			<div className="w-full flex justify-between items-center mb-2">
				<p className="text-xl font-normal uppercase ">item quantity :</p>
				<p className="text-xl font-semibold">{totalQuantity}</p>
			</div>
			<div className="w-full flex justify-between items-center my-2 pt-4 border-t border-gray-300">
				<p className="text-xl font-normal uppercase ">net total :</p>
				<p className="text-xl font-semibold">Rs {total}</p>
			</div>
		</div>
	);
};

export default Summary;
