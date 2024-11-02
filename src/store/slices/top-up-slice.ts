import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TopUpState {
  inputNominal: string;
}

const initialState: TopUpState = {
  inputNominal: "",
};

const topUpSlice = createSlice({
  name: "topUp",
  initialState,
  reducers: {
    setInputNominal(state, action: PayloadAction<string>) {
      state.inputNominal = action.payload;
    },
    clearInputNominal(state) {
      state.inputNominal = "";
    },
  },
});

export const { setInputNominal, clearInputNominal } = topUpSlice.actions;
export default topUpSlice.reducer;
