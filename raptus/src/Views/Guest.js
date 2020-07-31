import React from 'react';
import './Guest.scss';
import { withFirebase } from '../Components/Firebase';
import { useParams } from "react-router-dom";
import { usePromise } from '../Utils/usePromise';

export const Guest = withFirebase(({ firebase }) => {
    const { name } = useParams();

    const guest = usePromise(firebase.guestByName(name));           

    if (guest) {
        return (
            <article className="Guest">
              <h3>NAVN: {guest.name}</h3>
              <img src={guest.image}></img>
              <p>{guest.bio}</p>
            </article>
          );    
    } else {
        return <p style={{textAlign: 'center'}}>Laster...</p>
    }
})