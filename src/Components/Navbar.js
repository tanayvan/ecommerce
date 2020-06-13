import React, { useState } from "react";
import { Drawer, Button } from "antd";

import menu from "../assets/menu.svg";
import bag from "../assets/bag.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <nav className="nav">
        <Button
          style={{
            border: "none",
          }}
          className="nav-link active"
          onClick={showDrawer}
        >
          <img src={menu} className="icon" />
        </Button>
        <Link className="nav-link " to="/">
          <p className="text-center brand">Bogg Clothing</p>
        </Link>
        <Link className="nav-link  ml-auto">
          <img src={bag} className="icon bagicon" />
        </Link>
      </nav>
      <Drawer
        title="Bogg Clothing"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Link className="nav-link drawer-link">Login/Signup</Link>
        <Link className="nav-link drawer-link mt-3">Profile</Link>
        <Link className="nav-link drawer-link mt-3">My Orders</Link>
        <Link className="nav-link drawer-link mt-3">Sign Out</Link>
      </Drawer>
    </div>
  );
}
