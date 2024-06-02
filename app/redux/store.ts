import { configureStore } from "@reduxjs/toolkit";
import { TypeScriptConfig } from "next/dist/server/config-shared";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import appReducer from "./features/appSlice";

export const store = configureStore({
  reducer: {
    appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
