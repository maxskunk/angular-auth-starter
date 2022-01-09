import * as admin from 'firebase-admin';
import * as firebase from "firebase-admin";
import { cert } from 'firebase-admin/app';

//Autenticate to main auth server
admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

// //Authenticate to database
// const zonksServiceAccount = require('./../secrets/zokya-zonks-firebase-adminsdk-vpadf-ee07e72b50.json');
// const zonkProject = firebase.initializeApp({ credential: cert(zonksServiceAccount) }, 'zonkProject');

//Export
const authDb = admin.firestore();
// const zonksDb = zonkProject.firestore();
export { admin, authDb };