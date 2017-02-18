var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyDAT1D2WaTgz6FFjUPhZpyhvAJgjlsLEoI",
    authDomain: "school-api-d0382.firebaseapp.com",
    databaseURL: "https://school-api-d0382.firebaseio.com",
    storageBucket: "school-api-d0382.appspot.com",
    messagingSenderId: "31936078352"
};

firebase.initializeApp(config);


module.exports = firebase
