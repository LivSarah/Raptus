import React from "react";
import './Program.scss'
import { PageHeader } from '../Components/PageHeader';
import FestivalContentBar from '../Components/FestivalContentBar';
import TimescheduleColumn from '../Components/TimescheduleColumn';


export const Program = () => (
    <section className="Program">
        <PageHeader preTitle="Årets" title='PROGRAM'/>

        <FestivalContentBar />

        <article className="festival-schedule">
            <TimescheduleColumn dayAndRoom="fridayRoom1" />
            <TimescheduleColumn dayAndRoom="fridayRoom2"/>
            <TimescheduleColumn dayAndRoom="fridayRoom3"/>
            <TimescheduleColumn dayAndRoom="saturdayRoom1"/>
            <TimescheduleColumn dayAndRoom="saturdayRoom2"/>
            <TimescheduleColumn dayAndRoom="saturdayRoom3"/>
            <TimescheduleColumn dayAndRoom="sundayRoom1"/>
            <TimescheduleColumn dayAndRoom="sundayRoom2"/>
            <TimescheduleColumn dayAndRoom="sundayRoom3"/>        
        </article>

    </section>
);
