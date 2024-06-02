import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AppState;
};

type AppState = {
  isNavBarOnTop: boolean;
};

const initialState = {
  value: {
    isNavBarOnTop: false,
  } as AppState,
} as InitialState;

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateNavBarOnTop: (_, action: PayloadAction<boolean>) => {
      return {
        value: {
          isNavBarOnTop: action.payload,
        },
      };
    },
  },
});

export const { updateNavBarOnTop } = app.actions;
export default app.reducer;
