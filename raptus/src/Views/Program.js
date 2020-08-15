import React from "react";
import "./Program.scss";
import { PageHeader } from "../Components/PageHeader";
import FestivalContentBar from "../Components/FestivalContentBar";
import TimescheduleColumn from "../Components/TimescheduleColumn";

export const Program = () => (
  <main className="Program">
    <PageHeader preTitle="Årets" title="PROGRAM" />

    <FestivalContentBar />

    <article className="festival-schedule">
      <div className="day-container">
        <div>
          <h3>Fredag</h3>
        </div>
        <div className="schedule-columns">
          <TimescheduleColumn dayAndRoom="fridayRoom1" />
          <TimescheduleColumn dayAndRoom="fridayRoom2" />
          <TimescheduleColumn dayAndRoom="fridayRoom3" />
        </div>
      </div>
      <div className="day-container">
        <div>
          <h3>Lørdag</h3>
        </div>
        <div className="schedule-columns">
          <TimescheduleColumn dayAndRoom="saturdayRoom1" />
          <TimescheduleColumn dayAndRoom="saturdayRoom2" />
          <TimescheduleColumn dayAndRoom="saturdayRoom3" />
        </div>
      </div>
      <div className="day-container">
        <div>
          <h3>Søndag</h3>
        </div>
        <div className="schedule-columns">
          <TimescheduleColumn dayAndRoom="sundayRoom1" />
          <TimescheduleColumn dayAndRoom="sundayRoom2" />
          <TimescheduleColumn dayAndRoom="sundayRoom3" />
        </div>
      </div>
    </article>
  </main>
);
