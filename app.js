//Require https module
const https = require("https");
const username = "chalkers";

//Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}

// Connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(
  `https://teamtreehouse.com/${username}.json`,
  response => {
    let body = "";
    // Read the data
    response.on("data", data => {
      body += ("date:", data.toString());
    });

    response.on("end", () => {
      const profile = JSON.parse(body);
      printMessage(username, profile.badges.length, profile.points.JavaScript);
    });
    // Parse the data
    // Print the data
  }
);
