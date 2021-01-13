import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyAMsaTDyou2YMj7_6vmmW3bOfSo5iOJKuw",
  authDomain: "real-time-chat-app-10efa.firebaseapp.com",
  databaseURL: "https://real-time-chat-app-10efa-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();