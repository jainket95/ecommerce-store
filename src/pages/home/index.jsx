import { useProducts } from "../../hooks/useProducts";

const Home = () => {
	const products = useProducts();

	console.log(products);

	return (
		<div className="flex flex-col justify-start items-start">
			<h1 className="text-2xl font-normal uppercase">Products</h1>
			<div className="flex justify-start items-start flex-wrap"></div>
		</div>
	);
};

export default Home;
