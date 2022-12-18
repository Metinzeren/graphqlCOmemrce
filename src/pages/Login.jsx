import React, { useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, getUser, setUserInfo } from "../redux/slices/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const { userInfo, isLogin, isError, token } = useSelector(getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = () => {
    dispatch(fetchUsers(userInfo));
  };
  useEffect(() => {
    if (isLogin) {
      toast.success("Login successfully");
    } else if (
      isLogin &&
      userInfo.fullName !== "" &&
      userInfo.password !== ""
    ) {
      toast.error(isError.errorMessage);
    }
  }, []);
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);
  console.log(userInfo);
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <h1 className="d-flex mb-5 mt-5 justify-content-center">
            Lütfen giriş yapın!
          </h1>
          <form style={{ marginBottom: "150px" }}>
            <input
              onChange={(e) =>
                dispatch(setUserInfo({ ...userInfo, fullName: e.target.value }))
              }
              name="fullName"
              placeholder="Ad Soyad"
            />
            <input
              onChange={(e) =>
                dispatch(setUserInfo({ ...userInfo, password: e.target.value }))
              }
              name="password"
              placeholder="Şifreniz"
            />
            <button onClick={userLogin} className="btn btn-info">
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
