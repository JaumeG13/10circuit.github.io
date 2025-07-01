// drivers.js
const firebaseConfig = {
    apiKey: "AIzaSyB48KkdlQb794w2euzJWHwkUfz1xXbBQ38",
    authDomain: "circuit-f666e.firebaseapp.com",
    projectId: "circuit-f666e",
    storageBucket: "circuit-f666e.firebasestorage.app",
    messagingSenderId: "829065746483",
    appId: "1:829065746483:web:921256dd57c9cd1112eb46"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("drivers");
  list.innerHTML = ""; // clear 'Loading...'

  db.collection("drivers").orderBy("wins").get().then(snapshot => {
    snapshot.forEach(doc => {
      const driver = doc.data();
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${driver.name}</strong> — ${driver.country}<br>
        Race Starts: ${driver["race-starts"]} | Race finishes: ${driver["race-starts"]}<br>
        Wins: ${driver.wins} | Poles: ${driver.poles}<br>
        Podiums: ${driver.podiums} | Fastest Laps: ${driver["race-starts"]}<br>
      `;
      list.appendChild(item);
    });
  }).catch(err => {
    list.innerHTML = `<li>Error loading data: ${err.message}</li>`;
  });
});