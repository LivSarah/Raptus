import React from 'react';
import { withFirebase } from './Firebase';
import { usePromise } from '../Utils/usePromise';

export const StandsCollection = withFirebase(({ firebase, children }) => {

    const stands = usePromise(firebase.stands(), []);
                
    return (
        <>
            {children(stands)}
        </>
    )
})
