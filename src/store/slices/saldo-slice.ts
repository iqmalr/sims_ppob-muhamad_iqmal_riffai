import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SaldoState {
  isVisible: boolean;
}

const initialState: SaldoState = {
  isVisible: false,
};

const saldoSlice = createSlice({
  name: "saldo",
  initialState,
  reducers: {
    toggleSaldoVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleSaldoVisibility } = saldoSlice.actions;
export const selectSaldoVisibility = (state: RootState) =>
  state.saldo.isVisible;
export default saldoSlice.reducer;
