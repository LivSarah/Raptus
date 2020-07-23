import React from 'react';

export const Person = ({image, href, overlay, name, title}) => {
    const tag = href ? 'a' : 'span';

    return React.createElement(tag, {href}, [
        <img src={image}></img>
    ])
}
