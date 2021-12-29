import * as admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

const database = admin.firestore();

module.exports = {
    admin: admin,
    db: database
};