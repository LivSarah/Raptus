import app from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

class Firebase {
    constructor() {
        // console.log(firebaseConfig)

        app.initializeApp(firebaseConfig);
        this.db = app.firestore();
    }

    guests() {
        return this.db.collection('guests').get();
    }

    numberOfGuests(number) {
        return this.db.collection('guests').limit(number).get();
    }

    starringGuests() {
        return this.db.collection('guests').where("starring", "==", true).limit(3).get();
    }
}

export default Firebase;