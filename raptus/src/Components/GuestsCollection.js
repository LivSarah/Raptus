import React, {useState, useEffect} from 'react';
import { withFirebase } from './Firebase';

export const GuestsCollection = withFirebase(({ firebase, children, starring }) => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const snapshot = await (starring ? firebase.starringGuests() : firebase.guests());
                
                const guests = snapshot.docs.map((doc) => (
                    doc.data()
                ));
                setGuests(guests);

            } catch (error) {
                console.error(error)
            }
        })()
    }, [])
    return (
        <>
            {children(guests)}
        </>
    )
})