if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

exports.formatMealMessage = function(place, time, date) {
  return "Hey! How about we grab food from {0} at {1} on {2}?".format(place, time, date);
}

exports.formatHangoutMessage = function(place, time, date) {
  return "Hey! Want to hangout at {0} at {1} on {2}?".format(place, time, date);
}

exports.formatConcertMessage = function(place, time, date) {
  return "Hey! Want to go see a concert at {0} at {1} on {2}?".format(place, time, date);
}

exports.formatStudyMessage = function(place, time, date) {
  return "Hey! Want to meet up and go study at {0} at {1} on {2}?".format(place, time, date);
}

exports.formatBoardGameMessage = function(place, time, date) {
  return "Hey! Want to meet up and play {0} at {1} on {2}?".format(place, time, date);
}

exports.formatPlaySportsMessage = function(place, time, date) {
  return "Hey! Want to meet up and play {0} at {1} on {2}?".format(place, time, date);
}

exports.formatMoviesMessage = function(place, time, date) {
  return "Hey! Want to go and watch {0} at {1} on {2}?".format(place, time, date);
}

exports.sendMealMessage = function() {
  var restaurants = ["Liholiho Yacht Club", "McDonalds", "La Taqueria", "Seven Hills",
  "Boulevard", "Super Duper Burgers", "Crepevine", "Fentons", "Daimo", "Fuddruckers",
  "Panda Express", "T4", "ShareTea", "La Note", "Barney's"];
  return "Hey! How does going to {0} to eat sound?".format(restaurants[Math.floor(Math.random() * restaurants.length)]);
}

exports.sendHangoutMessage = function() {
  var hangoutLocations = ["Golfland USA", "Ocean Beach", "Alcatraz Island", "Disneyland",
  "Japantown", "Sharks Ice"];
  return "Hey! How does hanging out at {0} sound?".format(hangoutLocations[Math.floor(Math.random() * hangoutLocations.length)]);
}

exports.sendConcertMessage = function() {
  var concertLocations = ["The San Francisco Symphony", "Ed Sheeran", "Justin Bieber", "Taylor Swift"];
  return "Hey! Why don't we go and watch {0} perform?".format(concertLocations[Math.floor(Math.random() * concertLocations.length)]);
}

exports.sendStudyMessage = function() {
  var studyLocations = ["Main Stacks", "Library Doe", "Moffitt", "Soda Hall", "Crossroads"];
  return "Hey! Why don't we go to {0} to study?".format(studyLocations[Math.floor(Math.random() * studyLocations.length)]);
}

exports.sendBoardGameMessage = function() {
  var boardGames = ["Pirate's Cove", "Settlers of Catan", "Coup", "Bang"];
  return "Hey! Why don't we go play {0}?".format(boardGames[Math.floor(Math.random() * boardGames.length)]);
}

exports.sendPlaySportsMessage = function() {
  var sports = ["Tennis", "Football", "Soccer", "Lacrosse", "Basketball",
  "Golf", "Rugby", "Badminton"];
  return "Hey! Why don't we go play some {0}?".format(sports[Math.floor(Math.random() * sports.length)]);
}

exports.sendMoviesMessage = function() {
  var movies = ["Frozen", "Kimi No Nawa", "Moana", "La La Land", "High School Musical 2",
  "Mean Girls", "Inception", "Lion King"];
  return "Hey! Why don't we go watch {0}?".format(movies[Math.floor(Math.random() * movies.length)]);
}
