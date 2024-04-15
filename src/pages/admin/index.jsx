import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext, useAppDispatchContext } from "../../context";
import { actions } from "../../context/types";
import { generateDiscount } from "../../utils";
import { v4 } from "uuid";
import DiscountItem from "../../components/DiscountItem";

const initDiscountState = {
	code: "",
	value: "10",
	index: "",
};

const Admin = () => {
	const { discounts } = useAppContext();
	// const navigate = useNavigate();
	const dispatch = useAppDispatchContext();

	const [discount, setDiscount] = useState(initDiscountState);

	const handleDiscountChange = (e) => {
		e.preventDefault();
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

	// const goToHome = () => {
	// 	navigate("/");
	// };

	return (
		<div className="w-full flex flex-col justify-start items-start">
			<h1 className="text-2xl font-normal uppercase mb-10">Admin Page</h1>
			<div className="w-full flex flex-row-reverse justify-start items-start">
				<div className="w-1/2 flex flex-col justify-start items-start gap-5">
					<h1 className="text-lg font-normal uppercase ">Order Details</h1>
					{/* order details */}
					<div className="w-full flex flex-col justify-start">
						<div className="flex justify-between items-center">
							<p className="text-lg">Count of Items</p>
							{/* <p className="text-lg">{code}</p> */}
						</div>
						<div className="flex justify-between items-center">
							<p className="text-lg">Total Purchase Amount</p>
							{/* <p className="text-lg">{value}</p> */}
						</div>
						<div className="flex justify-between items-center">
							<p className="text-lg">List of Discount Codes</p>
							{/* <p className="text-lg">{index}</p> */}
						</div>
						<div className="flex justify-between items-center">
							<p className="text-lg">Total Discount Amount</p>
							{/* <p className="text-lg">{index}</p> */}
						</div>
					</div>
					<h1 className="text-lg font-normal uppercase ">Discount Table</h1>
					{discounts.length > 0 &&
						discounts.map((discount) => (
							<DiscountItem key={discount.id} {...discount} />
						))}
				</div>
				<div className="w-1/2 flex flex-col justify-start items-start mr-10">
					<h1 className="text-lg font-normal uppercase mb-4">
						Generate Discount
					</h1>
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

					{/* <button
						className="w-full bg-gray-200 text-black p-4 rounded-md"
						onClick={goToHome}>
						Go to product page
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default Admin;
