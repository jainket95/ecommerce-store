/* eslint-disable react/prop-types */
const CartItem = ({ title, price, thumbnail }) => {
	return (
		<div className="w-full h-[8rem] flex justify-start items-start p-4 border border-gray-400 rounded-lg">
			<div className="h-full w-1/4 flex justify-center items-center mr-4">
				{thumbnail && (
					<img className="w-full h-full rounded-lg" src={thumbnail} alt="" />
				)}
			</div>
			<div className="w-3/4 flex justify-between items-center mr-4">
				<p className="text-2xl font-semibold mr-10">{title}</p>
				<p className="text-xl font-normal">Rs {price}</p>
			</div>
		</div>
	);
};

export default CartItem;
