import { useReducer } from "react";
import { appReducer, initialState } from "./reducer";
import { AppContext, AppDispatchContext } from ".";

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<AppContext.Provider value={state}>
			<AppDispatchContext.Provider value={dispatch}>
				{children}
			</AppDispatchContext.Provider>
		</AppContext.Provider>
	);
};
