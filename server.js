var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Links to Routes
// to htmlRoutes.js

// to apiRoutes.js

var friend = [
  {
    name: "Vlad",
    photo: "",
    scores: [2, 4, 3, 3, 2, 5, 2, 3, 1, 3]
  },
  {
    name: "Floyd",
    photo: "",
    scores: [5, 4, 5, 5, 3, 4, 4, 4, 5, 3]
  },
  {
    name: "Aughra",
    photo: "",
    scores: [1, 1, 5, 1, 1, 2, 5, 1, 5, 1]
  },
  {
    name: "MC Pee Pants",
    photo: "https://i.ytimg.com/vi/diybDrSohHI/hqdefault.jpg",
    scores: [3, 3, 5, 1, 5, 2, 5, 1, 5, 1]
  }
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
});


app.get("/api/friends", function(req, res) {
  return res.json(friend);
});

// Create New Friend - takes in JSON input
app.post("/api/friends", function(req, res) {
  
  var newFriend = req.body;

  console.log(newFriend);

  friend.push(newFriend);

  res.json(newFriend);
});

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
