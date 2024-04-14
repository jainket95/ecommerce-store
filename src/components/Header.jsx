import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="min-w-[96%] flex justify-between items-center fixed z-10 py-4 bg-black">
			<Link to="/" className="cursor-pointer">
				<h1 className="text-4xl font-semibold uppercase">ecommerce store</h1>
			</Link>
			<Link to="/cart" className="mr-3 cursor-pointer">
				<p className="text-md font-normal uppercase text-cyan-200">Cart</p>
			</Link>
		</div>
	);
};

export default Header;
