import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useDataFetcher } from "./context/action";
import { useEffect } from "react";
import { useAppContext } from "./context";

function App() {
	const { getProducts, getCart, getDiscounts, getAdminStore } =
		useDataFetcher();

	useEffect(() => {
		fetchInitData();
	}, []);

	const fetchInitData = () => {
		getProducts();
		getCart();
		getDiscounts();
		getAdminStore();
	};

	console.log(useAppContext());
	return (
		<div className="w-[100vw] h-[100vh] bg-black text-white relative overflow-x-hidden">
			<div className="container mx-auto bg-black">
				<Header />
				<div className="pt-20">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default App;
