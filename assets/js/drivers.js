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
  const list = document.getElementById("list");
  list.innerHTML = ""; // clear 'Loading...'

  db.collection("drivers").orderBy("race-starts", "desc").get().then(snapshot => {
    snapshot.forEach(doc => {
      const driver = doc.data();
      const item = document.createElement("label");
      item.classList.add("driver");

      let country = driver.country; // automatically assign "eu" flag when country is empty
      if (country === "") {
        country = "eu";
      }

      item.innerHTML = `
        <div class="flag-name">
          <span class="fi fi-${country}"></span>
          <h2>${driver.name}</h2>
        </div>
        <input type="checkbox">
        <div class="stats">
            <span>Race Starts: ${driver["race-starts"]}</span>
            <span>Race finishes: ${driver["race-finishes"]}</span>
            <span>Wins: ${driver.wins}</span>
            <span>Poles: ${driver.poles}</span>
            <span>Podiums: ${driver.podiums}</span>
            <span>Fastest Laps: ${driver["fastest-laps"]}</span>
        </div>
      `;
      list.appendChild(item);
    });
  }).catch(err => {
    list.innerHTML = `<li>Error loading data: ${err.message}</li>`;
  });
});