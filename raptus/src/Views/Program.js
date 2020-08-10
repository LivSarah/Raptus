import React from "react";
import './Program.scss'
import { PageHeader } from '../Components/PageHeader';
import FestivalContentBar from '../Components/FestivalContentBar';

export const Program = () => (
    <section className="Program">
        <PageHeader preTitle="Årets" title='PROGRAM'/>

        <FestivalContentBar />

        <article className="festival-schedule">

        </article>

    </section>
);
