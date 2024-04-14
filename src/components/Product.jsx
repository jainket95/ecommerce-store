const Product = ({ title, price }) => {
	return (
		<div className="flex flex-col justify-start items-start">
			<p className="text-lg">{title}</p>
			<div className="flex justify-between items-center">
				<p className="text-md">{price}</p>
				<button>Add to cart</button>
			</div>
		</div>
	);
};

export default Product;
