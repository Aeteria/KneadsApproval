// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');

const twit = require('twit');

admin.initializeApp(functions.config().firebase);

exports.onPush = functions.https.onRequest((req, res) => {
    console.log(JSON.parse(req.body));
    res.status(200).send(req.body);
});