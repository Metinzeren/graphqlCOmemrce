import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";
import { USER_MUTATION } from "../services/queries";

const Register = () => {
  const [saveUser, { loading }] = useMutation(USER_MUTATION);
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    age: "",
    profile_photo: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    saveUser({
      variables: {
        input: userInfo,
      },
    });
    setUserInfo("");
    toast.success("Kullanıcı Oluşturuldu");
    navigate("/login");
  };

  if (loading) return <div>loading</div>;
  return (
    <div>
      <div className="container">
        <div className="register">
          <form onSubmit={onSubmit} noValidate>
            <input
              onChange={(e) => {
                setUserInfo({ ...userInfo, fullName: e.target.value });
              }}
              name="fullName"
              type="text"
              placeholder="full name"
            />
            <input
              onChange={(e) => {
                setUserInfo({ ...userInfo, age: e.target.value });
              }}
              name="age"
              type="text"
              placeholder="age"
            />
            <input
              onChange={(e) => {
                setUserInfo({ ...userInfo, profile_photo: e.target.value });
              }}
              name="profile_photo"
              type="text"
              placeholder="profile photo"
            />
            <input
              onChange={(e) => {
                setUserInfo({ ...userInfo, password: e.target.value });
              }}
              name="password"
              type="text"
              placeholder="Şifre"
            />
            <button className="btn btn-primary" type="submit">
              Kullanıcı oluştur
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
