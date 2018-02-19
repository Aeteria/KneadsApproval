// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');

const twit = require('twit');

admin.initializeApp(functions.config().firebase);

exports.onPush = functions.https.onRequest((req, res) => {
    console.log("twit.consumer_key", functions.config().twit.consumer_key);
    console.log("twit.consumer_secret", functions.config().twit.comsumer_secret);
    console.log("twit.access_token", functions.config().twit.access_token);
    console.log("twit.access_token_secret", functions.config().twit.access_token_secret);
    console.log(req.body);
    console.log(JSON.parse(req.body));
    res.status(200).send(req.body);
});