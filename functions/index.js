// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

const twit = require('twit');

admin.initializeApp(functions.config().firebase);

exports.onPush = functions.https.onRequest((req, res) => {
    console.log(JSON.parse(req.body));
    res.status(200).send(req.body);

    var T = new Twit({
  consumer_key:         'yYMqR97ivtHAPSXoM0q9E4MNU',
  consumer_secret:      'xiyuphio0wAwEz6Z4eL5cPbq8YwzERWKaq6t9vgFfJjsOPfdnD',
  access_token:         '965377684879495168-BqOR9A0IXWLafh9fRXdVMWxtB7vspzH',
  access_token_secret:  '965377684879495168-BqOR9A0IXWLafh9fRXdVMWxtB7vspzH',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

});
