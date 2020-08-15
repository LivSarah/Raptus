import React from 'react';
import './Guest.scss';
import { withFirebase } from '../Components/Firebase';
import { useParams } from "react-router-dom";
import { usePromise } from '../Utils/usePromise';
import Button from 'react-bootstrap/Button';

export const Guest = withFirebase(({ firebase }) => {
    const { name } = useParams();

    const guest = usePromise(firebase.guestByName(name));

    if (guest) {
        return (
            <main className="Guest">
                <div>
                    <img className="guest-portrait" src={guest.image}></img>
                    <Button className="view-website-button" href={guest.website} target="_blank" variant="outline-light">Se nettside</Button>                
                </div>  
                <div>
                    <h3 className="guest-name">{guest.name}</h3>
                    <p className="guest-bio">{guest.bio.replace(/\\n/g, '\n\n')}</p>
                </div>
            </main>
          );    
    } else {
        return <p style={{textAlign: 'center'}}>Laster...</p>
    }
})