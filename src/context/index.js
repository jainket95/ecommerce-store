import { createContext, useContext } from "react";

export const AppContext = createContext(null);
export const AppDispatchContext = createContext(null);

export const useAppContext = () => {
	return useContext(AppContext);
};
export const useAppDispatchContext = () => {
	return useContext(AppDispatchContext);
};
