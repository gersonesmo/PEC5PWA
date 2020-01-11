importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
const config = {
  apiKey: "AIzaSyC_mhBOw5E4Du80qKBEM-CRHopDZPyKr_0",
  authDomain: "gersonpwa1.firebaseapp.com",
  databaseURL: "https://gersonpwa1.firebaseio.com",
  projectId: "gersonpwa1",
  storageBucket: "gersonpwa1.appspot.com",
  messagingSenderId: "466278452003",
  appId: "1:466278452003:web:3fa5c04023f0ca2cbdda96",
  measurementId: "G-NKM63FKFLQ"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});