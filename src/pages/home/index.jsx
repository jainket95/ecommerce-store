import { useEffect, useState } from "react";
import { useAppContext, useAppDispatchContext } from "../../context";
import { fetchProducts } from "../../utils";
import { actions } from "../../context/types";
import ProductItem from "../../components/ProductItem";

const Home = () => {
	const dispatch = useAppDispatchContext();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (products.length === 0) {
			fetchProducts().then((products) => {
				setProducts(products);
				dispatch({
					type: actions.FETCH_PRODUCTS,
					payload: products,
				});
			});
		}
	}, [products, products?.length, dispatch]);

	return (
		<div className="flex flex-col justify-start items-start">
			<h1 className="text-2xl font-normal uppercase mb-4">Products</h1>
			<div className="flex justify-start items-start flex-wrap gap-x-20 gap-y-10">
				{products.length === 0 && <p>Loading</p>}
				{products.length > 0 &&
					products.map((product) => (
						<ProductItem key={product.id} {...product} />
					))}
			</div>
		</div>
	);
};

export default Home;
