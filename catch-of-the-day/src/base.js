import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhIDIUQ5P60bErkcvsbZy4CiGHSnG76kI",
  authDomain: "catch-of-the-day-ginger-lee.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ginger-lee.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
