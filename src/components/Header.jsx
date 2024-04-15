import { Link } from "react-router-dom";
import { useAppContext } from "../context";

const Header = () => {
	const {
		cart: { totalQuantity },
	} = useAppContext();
	return (
		<div className="min-w-[94%] flex justify-between items-center fixed z-10 py-4 bg-black">
			<Link to="/" className="cursor-pointer">
				<h1 className="text-4xl font-semibold uppercase">ecommerce store</h1>
			</Link>
			<div className="flex justify-end items-center gap-x-10">
				<Link to="/admin" className="cursor-pointer">
					<h1 className="text-md font-normal uppercase text-blue-300">admin</h1>
				</Link>
				<Link to="/cart" className="mr-3 cursor-pointer">
					<div className="relative">
						<p className="text-md font-normal uppercase text-blue-300">Cart</p>
						{!!totalQuantity && (
							<div className="w-7 h-7  bg-gray-700 absolute -top-4 left-10 text-white rounded-full text-center pt-1 text-sm">
								{totalQuantity}
							</div>
						)}
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
