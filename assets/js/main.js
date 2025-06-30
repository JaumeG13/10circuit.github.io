// main.js
const firebaseConfig = {
  apiKey: "AIzaSyB48KkdlQb794w2euzJWHwkUfz1xXbBQ38",
  authDomain: "circuit-f666e.firebaseapp.com",
  projectId: "circuit-f666e",
  storageBucket: "circuit-f666e.firebasestorage.app",
  messagingSenderId: "829065746483",
  appId: "1:829065746483:web:921256dd57c9cd1112eb46",
  measurementId: "G-GV5WJB4YBM"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("races").get().then((snapshot) => {
  const resultsList = document.getElementById("results");
  snapshot.forEach((doc) => {
    const item = document.createElement("li");
    item.textContent = `${doc.id}: ${JSON.stringify(doc.data())}`;
    resultsList.appendChild(item);
  });
});