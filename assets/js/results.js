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
      const item = document.createElement("li");
      item.classList.add("result");
      item.innerHTML = `
        <span>${races.Date}</span>
        <span>${races.name}</span>
        <span>${races.Result[0].DriverName}</span>
        <span>${races["document-id"]}</span>
        <span>${races.Result[0].TotalTime}</span>
      `;
      list.appendChild(item);
    });
  }).catch(err => {
    list.innerHTML = `<li>Error loading data: ${err.message}</li>`;
  });
});

/*

async function fetchAndFormatRaceDate() {
  try {
    // Fetch the document snapshot
    const raceDocSnap = await getDoc(raceDocRef);

    if (raceDocSnap.exists()) {
      // Get the data from the document
      const raceData = raceDocSnap.data();

      // Check if the 'Date' field exists in the document data
      if (raceData.Date) {
        const dateStringFromFirestore = raceData.Date;

        // 1. Create a Date object from your string.
        const dateObject = new Date(dateStringFromFirestore);

        // 2. Define the formatting options.
        const options = {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        };

        // 3. Format the date using toLocaleDateString().
        const formattedDate = dateObject.toLocaleDateString('en-GB', options);

        console.log("Original Date from Firestore:", dateStringFromFirestore);
        console.log("Formatted Date:", formattedDate);

        // Now you can use 'formattedDate' to display in your UI, e.g.:
        // document.getElementById('race-date-display').textContent = formattedDate;

      } else {
        console.warn(`Document ${raceId} in 'races' collection does not have a 'Date' field.`);
      }
    } else {
      console.log(`No such document for ID: ${raceId} in 'races' collection!`);
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}

// Call the function to execute the fetch and format logic
fetchAndFormatRaceDate();
*/
