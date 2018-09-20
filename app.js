//Require https module
const https = require("https");

//Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}

// Connect to the API URL (https://teamtreehouse.com/username.json)
function getProfile(username) {
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
        printMessage(
          username,
          profile.badges.length,
          profile.points.JavaScript
        );
      });
      // Parse the data
      // Print the data
    }
  );
}

const users = process.argv.slice(2);
users.forEach(getProfile);
