import { useEffect } from "react";
import { useAppContext } from "../context";
import { useDataFetcher } from "../context/action";
import DiscountItem from "./DiscountItem";

const AdminStoreDetails = () => {
	const { discounts, adminStoreDetails } = useAppContext();
	const {
		data: {
			itemsQuantity,
			purchaseAmount,
			discountAmount,
			discounts: appliedDiscounts,
		},
		isDataAvailable,
	} = adminStoreDetails;
	const { getAdminStore } = useDataFetcher();

	useEffect(() => {
		getAdminStore();
	}, []);

	return (
		<div className="w-2/3 flex flex-col justify-start items-start gap-y-5">
			{!isDataAvailable && (
				<h1 className="text-lg font-normal">
					Note:
					<br />
					Place order or generate discount code to see Admin Order Details or
					Available Discount Code
				</h1>
			)}
			{isDataAvailable && (
				<>
					<h1 className="text-lg font-normal uppercase">Admin Order Details</h1>
					<div className="w-full flex flex-col justify-start gap-y-4 pt-2 border-t border-gray-400">
						<div className="flex justify-between items-center">
							<p className="text-lg">Count of Items</p>
							<p className="text-lg">{itemsQuantity}</p>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-lg">Total Purchase Amount</p>
							<p className="text-lg">{purchaseAmount}</p>
						</div>
						{appliedDiscounts.length > 0 && (
							<div className="flex flex-col justify-start items-start">
								<p className="text-lg mb-4">List of Applied Discount Codes</p>

								{appliedDiscounts.map((discount) => (
									<DiscountItem key={discount.id} {...discount} />
								))}
							</div>
						)}
						<div className="flex justify-between items-center">
							<p className="text-lg">Total Discount Amount</p>
							<p className="text-lg">{discountAmount}</p>
						</div>
					</div>
				</>
			)}
			{discounts.length > 0 && (
				<div className="w-full border-t border-gray-400 py-2">
					<h1 className="text-lg font-normal uppercase py-4">
						Available Discounts
					</h1>
					{discounts.map((discount) => (
						<DiscountItem key={discount.id} {...discount} />
					))}
				</div>
			)}
		</div>
	);
};

export default AdminStoreDetails;
