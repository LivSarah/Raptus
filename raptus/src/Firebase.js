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

    unwrapData(snapshot) {
        return snapshot.docs.map((doc) => (
            doc.data()
        ));
    }

    async guests() {
        const snapshot = await this.db.collection('guests').get();
        return this.unwrapData(snapshot);
    }

    async starringGuests() {
        const snapshot = await this.db.collection('guests').where("starring", "==", true).limit(3).get();
        return this.unwrapData(snapshot);
    }

    async guestByName(name) {
        const snapshot = await this.db.collection('guests').where("name", "==", name).limit(1).get();
        return this.unwrapData(snapshot)[0];
    }

    async stands() {
        const snapshot = await this.db.collection('stands').get();
        return this.unwrapData(snapshot);
    }
}

export default Firebase;