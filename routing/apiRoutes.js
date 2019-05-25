var friends = require("../data/friends.js")

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  // Create New Friend - takes in JSON input
  app.post("/api/friends", function(req, res) {
    var totalDifference = 0;
    var bestMatch = {
      name: "",
      photo: "",
      friendDiff: 1000
    };
    var newFriend = req.body;
  
    console.log(newFriend);
  
    friend.push(newFriend);
  
    res.json(newFriend);
  }); 
}
