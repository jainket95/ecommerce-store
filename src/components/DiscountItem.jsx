/* eslint-disable react/prop-types */
const DiscountItem = ({ code, value, index }) => {
	return (
		<div className="w-full flex flex-col justify-start mb-4">
			<div className="flex justify-between items-center">
				<p className="text-lg">Discount Code</p>
				<p className="text-lg">{code}</p>
			</div>
			<div className="flex justify-between items-center">
				<p className="text-lg">Discount Value</p>
				<p className="text-lg">{value}</p>
			</div>
			<div className="flex justify-between items-center">
				<p className="text-lg">Discount Order Index</p>
				<p className="text-lg">{index}</p>
			</div>
		</div>
	);
};

export default DiscountItem;
