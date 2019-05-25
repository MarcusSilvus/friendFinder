var friends = require("../data/friends.js")

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  // Create New Friend - takes in JSON input
  app.post("/api/friends", function(req, res) {
    var totalDiff = 0;
    var bestMatch = {
      name: "",
      photo: "",
      friendDiff: 1000
    };
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item) {
      return parseInt(item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };
    
    console.log("Name: " + userName);
    console.log("User score: " + userScores);

    var sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of user's score: " + sum);
    console.log("Best match: " + bestMatch.friendDiff);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDiff = 0;
      console.log("Total differnece: " + totalDiff);
      console.log("Best match of friend diff: " + bestMatch.friendDiff);
      
      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friend score: " + bfriendScore);
      totalDiff += Math.abs(sum - bfriendScore);
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>" + totalDiff);

      if (totalDiff <= bestMatch.friendDiff) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDiff = totalDiff;
      }
      console.log(totalDiff + " Total Difference"); 
    }
    console.log(bestMatch);
    friends.push(userData);
    console.log("New user added");
    console.log(userData);
    res.json(bestMatch); 
  }); 
}; 


  