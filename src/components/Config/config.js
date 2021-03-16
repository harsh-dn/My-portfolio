import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyC01c2NyRR1EsX23ssXbMp-5blYMp5OFkQ",
    authDomain: "react-spider.firebaseapp.com",
    databaseURL: "https://react-spider.firebaseio.com",
    projectId: "react-spider",
    storageBucket: "react-spider.appspot.com",
    messagingSenderId: "872005535782",
    appId: "1:872005535782:web:bfb60a3e03fe1c86467ee7",
    measurementId: "G-E6NJ1CQCZN"
  };

  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


