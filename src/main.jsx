import ReactDOM from "react-dom/client";
import "./index.css";

import { StrictMode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";
import { AppProvider } from "./context/provider";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	</StrictMode>
);
