import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type TSupplies = {
  email?: string;
  title: string;
  category: string;
  amount: number|string;
  description: string;
};
type TSuppliesState = {
  supplies: TSupplies[];
};
const initialSuppliesState: TSuppliesState = {
  supplies: [],
};
const suppliesSlice = createSlice({
  name: "supplies",
  initialState: initialSuppliesState,
  reducers: {
    donation: (state, action: PayloadAction<TSupplies>) => {
      state.supplies.push(action.payload);
    },
  },
});

export const { donation } = suppliesSlice.actions;
export default suppliesSlice.reducer;
