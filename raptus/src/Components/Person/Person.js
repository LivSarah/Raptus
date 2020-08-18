import React from 'react';
import './Person.scss';
import { Link } from "react-router-dom";

export const Person = ({image, to=undefined, name, profession, clickable}) => {
    const tag = clickable ? Link : 'span';

    return React.createElement(tag, {to}, (
        <div className="Person">
            <div className="color-tint"/>
            <img src={image} alt={name}/>
            <p className="name">{name}</p>
            <p className="profession">{profession}</p>
        </div>
    ));
}
