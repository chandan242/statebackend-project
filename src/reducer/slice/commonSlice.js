import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navigationOpen: false,
//   token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {
    setNavigationOpen(state, value) {
      state.navigationOpen = value.payload;
    },
    // setToken(state, value) {
    //   state.token = value.payload;
    // },
  },
});

export const { setNavigationOpen } = commonSlice.actions;
// setToken
export default commonSlice.reducer;