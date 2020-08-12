import React from "react";
import './Styles/TimescheduleColumn.scss';

function TimescheduleColumn({dayAndRoom}) {

    let roomName;
    let schedule;
    
    const fridayRoom1 = [
        {time: "16:00", postName: "Dørene åpner"},
        {time: "16:15", postName: "Åpningsshow"},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
    ];
    const fridayRoom2 = [
        {time: "16:00", postName: "Dørene åpner"},
        {time: "16:15", postName: "-"},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
    ];
    const fridayRoom3 = [
        {time: "16:00", postName: "Dørene åpner"},
        {time: "16.15", postName: "-"},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
    ];
    
    const saturdayRoom1 = [
        {time: "16:00", postName: "Dørene åpner"},
        {time: "16.15", postName: "-"},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
    ];
    
    const saturdayRoom2 = [
        {time: "16:00", postName: "Dørene åpner"},
        {time: "16.15", postName: "-"},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
    ];
    
    const saturdayRoom3 = [
        {time: "16:00", postName: "Dørene åpner"},
        {time: "16.15", postName: "-"},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
    ];
    
    const sundayRoom1 = [
        {time: "16:00", postName: "Dørene åpner"},
        {time: "16.15", postName: "-"},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
    ];
    
    const sundayRoom2 = [
        {time: "16:00", postName: "Dørene åpner"},
        {time: "16.15", postName: "-"},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
    ];
    
    const sundayRoom3 = [
        {time: "16:00", postName: "Dørene åpner"},
        {time: "16.15", postName: "-"},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
        {time: "", postName: ""},
    ];

    switch(dayAndRoom){
        case 'fridayRoom1': 
            roomName = 'Rom 1';
            schedule = fridayRoom1;
            break;
        case 'fridayRoom2':
            roomName = 'Rom 2';
            schedule = fridayRoom2;
            break;
        case 'fridayRoom3': 
            roomName = 'Rom 3';
            schedule = fridayRoom3;
            break; 
        case 'saturdayRoom1':
            roomName = 'Rom 1';
            schedule = saturdayRoom1;
            break;
        case 'saturdayRoom2': 
            roomName = 'Rom 2';
            schedule = saturdayRoom2;
            break;
        case 'saturdayRoom3':
            roomName = 'Rom 3';
            schedule = saturdayRoom3;
            break;
        case 'sundayRoom1':
            roomName = 'Rom 1';
            schedule = sundayRoom1;
            break;
        case 'sundayRoom2': 
            roomName = 'Rom 2';
            schedule = sundayRoom2;
            break;
        case 'sundayRoom3':
            roomName = 'Rom 3';
            schedule = sundayRoom3;
            break;
        default: 
            roomName = 'Something went wrong';
            break;
    }

    return (
        <article className="TimescheduleColumn">
            <h4>{roomName}</h4>
            <div className="day-schedule">
                {schedule.map((entry) => (
                    <p key={entry.time}>{entry.time} {entry.postName}</p>

                ))}
            </div>
        </article>
    )
}

export default TimescheduleColumn;
