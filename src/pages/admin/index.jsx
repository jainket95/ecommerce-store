import { useNavigate } from "react-router-dom";
import AdminStoreDetails from "../../components/AdminStoreDetails";
import GenerateDiscount from "../../components/GenerateDiscount";

const Admin = () => {
	const navigate = useNavigate();

	const goToHome = () => {
		navigate("/");
	};

	return (
		<div className="w-full flex flex-col justify-start items-start">
			<h1 className="text-2xl font-normal uppercase mb-10">Admin Page</h1>
			<div className="w-full flex flex-row-reverse justify-start items-start mb-28">
				<AdminStoreDetails />
				<GenerateDiscount />
			</div>
			<button
				className="mx-auto bg-gray-200 text-black p-4 rounded-md"
				onClick={goToHome}>
				Go to product page
			</button>
		</div>
	);
};

export default Admin;
