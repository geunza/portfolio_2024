import { createSlice } from "@reduxjs/toolkit";
const initialState: { state: boolean; message: string } = {
  state: false,
  message: "",
};
const isErrorSlice = createSlice({
  name: "isError",
  initialState,
  reducers: {
    setIsError: (state, action) => {
      return action.payload;
    },
    setErrorOff: () => {
      return initialState;
    },
  },
});

export const { setIsError, setErrorOff } = isErrorSlice.actions;
export default isErrorSlice.reducer;
