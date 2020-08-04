import React from 'react';
import './Guest.scss';
import { withFirebase } from '../Components/Firebase';
import { useParams } from "react-router-dom";
import { usePromise } from '../Utils/usePromise';

export const Guest = withFirebase(({ firebase }) => {
    const { name } = useParams();

    const guest = usePromise(firebase.guestByName(name));  
    const expectedNewline = /\\n/g;

    if (guest) {
        return (
            <article className="Guest">
              <img className="guest-portrait" src={guest.image}></img>
              <div>
                <h3 className="guest-name">{guest.name}</h3>
                <p style={{'whiteSpace': 'pre-wrap'}} className="guest-bio">{guest.bio.replace(expectedNewline, '\n\n')}</p>
              </div>
            </article>
          );    
    } else {
        return <p style={{textAlign: 'center'}}>Laster...</p>
    }
})