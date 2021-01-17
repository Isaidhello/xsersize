const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = "YOUR_DB_URL"

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore("data.json");