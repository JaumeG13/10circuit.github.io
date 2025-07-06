// main.js
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

  db.collection("races").orderBy("Date", "desc").get().then(snapshot => {
    snapshot.forEach(doc => {
      const races = doc.data();
      const driver = doc.data();      
      let country = driver.country; // automatically assign "eu" flag when country is empty
      if (country === "") {
        country = "eu";
      }
      const item = document.createElement("li");
      item.classList.add("result");

      //date to readable format
      const rawDate = races.Date;
      const date = new Date(rawDate);

      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-GB', options);
      //end of readable date
      
      //time ms to hh:mm:ss.xxx
      function formatTime(ms) {
        const hours = Math.floor(ms / 3600000);
        const minutes = Math.floor((ms % 3600000) / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = ms % 1000;
    
        const h = String(hours).padStart(1, '0');
        const m = String(minutes).padStart(2, '0');
        const s = String(seconds).padStart(2, '0');
        const msStr = String(milliseconds).padStart(3, '0');
    
        // If hours are zero, omit them
        if (hours === 0) {
            return `${m}:${s}.${msStr}`;
        } else {
            return `${h}:${m}:${s}.${msStr}`;
        }
      }
      const formatted = formatTime(races.Result[0].TotalTime);
      //end of time calculation

      item.innerHTML = `
        <span>${formattedDate}</span>
        <span>${races.EventName}</span>
        <span><!--${driver.country} -->${races.Result[0].DriverName}</span>
        <span id="${races.championship}">${races.championship}</span>
        <span>${formatted}</span>
      `;
      list.appendChild(item);
    });
  }).catch(err => {
    list.innerHTML = `<li>Error loading data: ${err.message}</li>`;
  });
});