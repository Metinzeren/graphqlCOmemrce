import React, { useState } from "react";
import { Link } from "react-router-dom";

import CartCount from "./CartCount";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const [navItem, setNavItem] = useState("nav_item");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    //togleicon
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");

    //navIteö
    navItem === "nav_item"
      ? setNavItem("nav_item item_active")
      : setNavItem("nav_item");
  };

  return (
    <nav className="header ">
      <a href="/" className="brand">
        METIN
      </a>
      <ul className={active}>
        <li className={navItem}>
          <Link to="/register">Kayıt Ol</Link>
        </li>
        <li className={navItem}>
          <Link to="/register">zort</Link>
        </li>
        <li className={navItem}>
          <Link to="/register">mort</Link>
        </li>
        <li className={navItem}>
          <Link to="/login">Giriş Yap</Link>
        </li>
        <li className={navItem}>
          <CartCount />
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Header;
