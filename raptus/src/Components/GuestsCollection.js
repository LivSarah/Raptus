import React, {useState, useEffect} from 'react';
import { withFirebase } from './Firebase';

export const GuestsCollection = withFirebase(({ firebase, children, starring }) => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                if (starring) {           
                    const snapshot = await firebase.starringGuests();
                                    
                    const guests = snapshot.docs.map((doc) => (
                        doc.data()
                    ));
                    setGuests(guests);
                } else {
                    const snapshot = await firebase.guests();

                    const guests = snapshot.docs.map((doc) => (
                        doc.data()
                    ));
                    setGuests(guests);
                }
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