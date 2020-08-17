import React from "react";
import "./Styles/Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";
import { useRouteChange } from "../Utils/useRouteChange";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  const closeNavigation = () => {
      setIsOpen(false);
  }

  useRouteChange(() => {
    closeNavigation();
  });

  return (
    <section className="Navbar">
      <div
        className={classNames({ "open-navigation": isOpen, veil: true })}
        onClick={closeNavigation}
      ></div>
      <button onClick={toggleNavigation}>&#9776;</button>

      <nav className={classNames({ "open-navigation": isOpen })}>
        <Link to="/">Hjem</Link>

        <Link to="/gjester">Gjester</Link>

        <Link to="/program">Program</Link>

        <Link to="/cosplay">Cosplay</Link>

        <Link to="/stands">Stands</Link>

        <Link to="/frivillig">Frivillig</Link>
      </nav>
    </section>
  );
};
