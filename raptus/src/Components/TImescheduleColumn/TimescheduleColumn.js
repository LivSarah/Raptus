import React from "react";
import "./Styles/TimescheduleColumn.scss";
import Collapsible from "react-collapsible";
import { useMediaQuery } from "../../Utils/useMediaQuery";

function TimescheduleColumn({ dayAndRoom }) {
  let roomName;
  let schedule;

  const fridayRoom1 = [
    { time: "16:00", postName: "Dørene åpner" },
    { time: "16:15", postName: "Åpningsshow" },
    { time: "17:00", postName: "-" },
    { time: "18:00", postName: "-" },
    { time: "19:00", postName: "-" },
    { time: "20:00", postName: "Dørene stenger" },
  ];
  const fridayRoom2 = [
    { time: "16:00", postName: "Dørene åpner" },
    { time: "16:15", postName: "-" },
    { time: "17:00", postName: "-" },
    { time: "18:00", postName: "-" },
    { time: "19:00", postName: "-" },
    { time: "20:00", postName: "Dørene stenger" },
  ];
  const fridayRoom3 = [
    { time: "16:00", postName: "Dørene åpner" },
    { time: "16:15", postName: "-" },
    { time: "17:00", postName: "-" },
    { time: "18:00", postName: "-" },
    { time: "19:00", postName: "-" },
    { time: "20:00", postName: "Dørene stenger" },
  ];

  const saturdayRoom1 = [
    { time: "10:00", postName: "Dørene åpner" },
    { time: "11:00", postName: "-" },
    { time: "12:00", postName: "-" },
    { time: "13:00", postName: "-" },
    { time: "14:00", postName: "-" },
    { time: "15:00", postName: "-" },
    { time: "16:00", postName: "-" },
    { time: "17:00", postName: "-" },
    { time: "18:00", postName: "-" },
    { time: "19:00", postName: "-" },
    { time: "20:00", postName: "Dørene stenger" },
  ];

  const saturdayRoom2 = [
    { time: "10:00", postName: "Dørene åpner" },
    { time: "11:00", postName: "-" },
    { time: "12:00", postName: "-" },
    { time: "13:00", postName: "-" },
    { time: "14:00", postName: "-" },
    { time: "15:00", postName: "-" },
    { time: "16:00", postName: "-" },
    { time: "17:00", postName: "-" },
    { time: "18:00", postName: "-" },
    { time: "19:00", postName: "-" },
    { time: "20:00", postName: "Dørene stenger" },
  ];

  const saturdayRoom3 = [
    { time: "10:00", postName: "Dørene åpner" },
    { time: "11:00", postName: "-" },
    { time: "12:00", postName: "-" },
    { time: "13:00", postName: "-" },
    { time: "14:00", postName: "-" },
    { time: "15:00", postName: "-" },
    { time: "16:00", postName: "-" },
    { time: "17:00", postName: "-" },
    { time: "18:00", postName: "-" },
    { time: "19:00", postName: "-" },
    { time: "20:00", postName: "Dørene stenger" },
  ];

  const sundayRoom1 = [
    { time: "10:00", postName: "Dørene åpner" },
    { time: "11:00", postName: "-" },
    { time: "12:00", postName: "-" },
    { time: "13:00", postName: "-" },
    { time: "14:00", postName: "-" },
    { time: "15:00", postName: "-" },
    { time: "16:00", postName: "-" },
    { time: "17:00", postName: "-" },
    { time: "18:00", postName: "-" },
    { time: "19:00", postName: "Dørene stenger" },
  ];

  const sundayRoom2 = [
    { time: "10:00", postName: "Dørene åpner" },
    { time: "11:00", postName: "-" },
    { time: "12:00", postName: "-" },
    { time: "13:00", postName: "-" },
    { time: "14:00", postName: "-" },
    { time: "15:00", postName: "-" },
    { time: "16:00", postName: "-" },
    { time: "17:00", postName: "-" },
    { time: "18:00", postName: "-" },
    { time: "19:00", postName: "Dørene stenger" },
  ];

  const sundayRoom3 = [
    { time: "10:00", postName: "Dørene åpner" },
    { time: "11:00", postName: "-" },
    { time: "12:00", postName: "-" },
    { time: "13:00", postName: "-" },
    { time: "14:00", postName: "-" },
    { time: "15:00", postName: "-" },
    { time: "16:00", postName: "-" },
    { time: "17:00", postName: "-" },
    { time: "18:00", postName: "-" },
    { time: "19:00", postName: "Dørene stenger" },
  ];

  switch (dayAndRoom) {
    case "fridayRoom1":
      roomName = "Rom 1";
      schedule = fridayRoom1;
      break;
    case "fridayRoom2":
      roomName = "Rom 2";
      schedule = fridayRoom2;
      break;
    case "fridayRoom3":
      roomName = "Rom 3";
      schedule = fridayRoom3;
      break;
    case "saturdayRoom1":
      roomName = "Rom 1";
      schedule = saturdayRoom1;
      break;
    case "saturdayRoom2":
      roomName = "Rom 2";
      schedule = saturdayRoom2;
      break;
    case "saturdayRoom3":
      roomName = "Rom 3";
      schedule = saturdayRoom3;
      break;
    case "sundayRoom1":
      roomName = "Rom 1";
      schedule = sundayRoom1;
      break;
    case "sundayRoom2":
      roomName = "Rom 2";
      schedule = sundayRoom2;
      break;
    case "sundayRoom3":
      roomName = "Rom 3";
      schedule = sundayRoom3;
      break;
    default:
      roomName = "Something went wrong";
      break;
  }

  const isMobile = useMediaQuery("(max-width: 800px)");
  
  const triggerTagName = isMobile ? "button" : "span";
  const open = isMobile ? null : true;
  const triggerDisabled = isMobile ? null : true;

  return (
    <article className="TimescheduleColumn">
      <Collapsible
        open={open}
        triggerDisabled={triggerDisabled}
        triggerTagName={triggerTagName}
        trigger={roomName}
      >
        <div className="day-schedule">
          {schedule.map((entry) => (
            <p key={entry.time}>
              {entry.time} {entry.postName}
            </p>
          ))}
        </div>
      </Collapsible>
    </article>
  );
}

export default TimescheduleColumn;
