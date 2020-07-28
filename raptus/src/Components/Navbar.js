import React from 'react';
import './Styles/Navbar.scss';
import { Link } from "react-router-dom";

export const Navbar = () => (
    <section className="Navbar">
        <Link to="/">Hjem</Link>

        <Link to="/gjester">Gjester</Link>

        <Link to="/program">Program</Link>
    </section>
);
