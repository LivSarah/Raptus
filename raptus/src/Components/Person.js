import React from 'react';
import './Styles/Person.scss';

export const Person = ({image, href, overlay, name, profession, key}) => {
    const tag = href ? 'a' : 'span';

    return React.createElement(tag, {href}, [
            <div className="Person">
                <div className="color-tint"/>
                <img src={image} alt={name}/>
                <p className="name">{name}</p>
                <p className="profession">{profession}</p>
            </div>
    ])
}
