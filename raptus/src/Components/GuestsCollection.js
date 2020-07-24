import React, {useState, useEffect} from 'react';
import { withFirebase } from './Firebase';

export const GuestsCollection = withFirebase(({ firebase, children }) => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const snapshot = await firebase.guests();

                const guests = snapshot.docs.map((doc) => (
                    doc.data()
                ))

                setGuests(guests)
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