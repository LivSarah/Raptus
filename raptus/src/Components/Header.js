import React from 'react';
import './Styles/Header.scss';
import { Link } from "react-router-dom";

export const Header = () => (
        <div className="Header">
            <Link to="/">Hjem</Link>

            <Link to="/gjester">Gjester</Link>

            <Link to="/program">Program</Link>
        </div>
);
