import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
