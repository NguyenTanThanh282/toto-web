import { AcUnit } from "@mui/icons-material";
import { Grid, Icon } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./LeftBar.scss";

const menus = [
  {
    category: "Menu",
    menu: [
      { title: "Home", link: "/", id: "" },
      { title: "Movies showing", link: "", id: "#movies" },
      { title: "Coming soon", link: "", id: "#movies-coming-soon" },
      { title: "News", link: "", id: "#news" },
      { title: "Store", link: "/store", id: "" },
    ],
  },
  {
    category: "My account",
    menu: [
      { title: "Wallet", link: "/wallet", id: "" },
      { title: "History", link: "/history", id: "" },
    ],
  },
];

const checkActive = () => {};
const LeftBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div id="left-bar">
      <Grid container>
        <Grid item xs={12} className="logo">
          <Link to="/">ToToTicket</Link>
        </Grid>
        <div className="menus">
          {menus.map((item, index) => (
            <Grid item xs={12} key={index}>
              <p className="category">{item.category}</p>
              <Grid container className="menu">
                {item.menu.map((menuItem, index) => (
                  <Grid item xs={12} key={index} className={` menu-item`}>
                    <Icon className="icon">
                      <AcUnit />
                    </Icon>
                    <Link to={menuItem.link ? menuItem.link : menuItem.id}>
                      {menuItem.title}
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </div>
      </Grid>
    </div>
  );
};

export default LeftBar;
