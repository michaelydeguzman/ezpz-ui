import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  values: AppState;
};

type AppState = {
  isNavBarOnTop: boolean;
};

const initialState = {
  values: {
    isNavBarOnTop: false,
  } as AppState,
} as InitialState;

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateNavBarOnTop: (_, action: PayloadAction<boolean>) => {
      return {
        values: {
          isNavBarOnTop: action.payload,
        },
      };
    },
  },
});

export const { updateNavBarOnTop } = app.actions;
export default app.reducer;
