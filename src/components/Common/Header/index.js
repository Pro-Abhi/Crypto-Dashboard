import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../Button/button";
import MobileDrawer from "./Drawer";

import "./styles.css";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <a href="/">
        <h1>
          CryptoTrade<span style={{ color: "var(--blue)" }}></span>
        </h1>
      </a>
      <div className="links-flex">
        <Switch
          checked={darkMode}
          onClick={() => {
            changeMode();
          }}
        />
        <NavLink to="/">
          <p className="link">Home</p>
        </NavLink>
        <NavLink to="/compare">
          <p className="link">Compare</p>
        </NavLink>
        <NavLink to="/watchlist">
          <p className="link">Watchlist</p>
        </NavLink>
        <NavLink to="/dashboard">
          <Button
            text="Dashboard"
            onClick={() => {
              console.log("btn-clicked!!!");
            }}
          />
        </NavLink>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;
