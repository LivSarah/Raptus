import React from 'react';
import FirebaseContext from '../FirebaseContext';
import Firebase from '../Firebase';

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default Firebase;
export { FirebaseContext };