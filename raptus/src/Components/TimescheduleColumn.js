import React from "react";

function TimescheduleColumn({dayAndRoom}) {

    let title;
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

    console.log("HELLO: ", dayAndRoom)
    switch(dayAndRoom){
        case 'fridayRoom1': 
            title = 'Fredag';
            schedule = fridayRoom1;
            break;
        case 'fridayRoom2':
            title = 'Fredag';
            schedule = fridayRoom2;
            break;
        case 'fridayRoom3': 
            title = 'Fredag';
            schedule = fridayRoom3;
            break; 
        case 'saturdayRoom1':
            title = 'Lørdag';
            schedule = saturdayRoom1;
            break;
        case 'saturdayRoom2': 
            title = 'Lørdag';
            schedule = saturdayRoom2;
            break;
        case 'saturdayRoom3':
            title = 'Lørdag';
            schedule = saturdayRoom3;
            break;
        case 'sundayRoom1':
            title = 'Søndag';
            schedule = sundayRoom1;
            break;
        case 'sundayRoom2': 
            title = 'Søndag';
            schedule = sundayRoom2;
            break;
        case 'sundayRoom3':
            title = 'Søndag';
            schedule = sundayRoom3;
            break;
        default: 
            title = 'Something went wrong';
            break;
    }

    return (
        <article>
            <h3>{title}</h3>
        </article>
    )
}

export default TimescheduleColumn;
