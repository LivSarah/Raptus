import React from 'react';
import './Styles/PageHeader.scss';

export const PageHeader = ({title, preTitle}) => (
    <section className="PageHeader">
        <header>
            <h4>{preTitle}</h4>
            <h1>{title}</h1>
        </header>
    </section>
);
