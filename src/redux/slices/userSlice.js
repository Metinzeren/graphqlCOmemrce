import { createSlice } from "@reduxjs/toolkit";
import client from "../../apollo";
import { GET_USERS } from "../../services/queries";

const initialState = {
  token: {},
  userInfo: {
    fullName: "",
    password: "",
  },
  isLogin: false,
  isLoading: false,
  isError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    setLogOut: (state) => {
      state.isLogin = false;
      state.userInfo = { fullName: "", password: "" };
    },
  },
});

export const fetchUsers =
  ({ email, password }) =>
  (dispatch) => {
    dispatch(setLoading(true));
    client
      .query({
        query: GET_USERS,
        variables: { email, password },
      })
      .then((result) => {
        dispatch(setUser(result.data));
        console.log(result.data, "data");
        dispatch(setIsLogin(true));
      })
      .catch((error) => {
        dispatch(setError(error));
        dispatch(setIsLogin(true));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

export const {
  setUserInfo,
  setUser,
  setIsLogin,
  setLoading,
  setError,
  setLogOut,
} = userSlice.actions;
export const getUser = (state) => {
  return state.userInfo;
};
export default userSlice.reducer;
