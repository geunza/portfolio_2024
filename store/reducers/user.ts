// import { clearToken } from "@/public/assets/ts/client";
// import { User } from "@/public/assets/types/user";
type User = {
  id: number;
  userId: string;
  userName: string;
  type: string;
};
import { createSlice } from "@reduxjs/toolkit";
export type UserState = {
  isLoggedIn: boolean;
  userInfo: Partial<User>;
};
const initialState: UserState = {
  isLoggedIn: false,
  userInfo: {},
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        isLoggedIn: true,
        userInfo: action.payload,
      };
    },
    resetUser: () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      // clearToken();
      return initialState;
    },
  },
});
export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
