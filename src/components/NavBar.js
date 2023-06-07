
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Explore", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Services", href: "/service" },
  { text: "Find a Doctor", href: "/doctor" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <a href={"/"}>
          <a>
            <h1 className="logo text-2xl">D-TREAT</h1>
          </a>
        </a>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;