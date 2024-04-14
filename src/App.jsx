import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
	return (
		<div className="w-[100vw] h-[100vh] bg-black text-white relative overflow-hidden">
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
