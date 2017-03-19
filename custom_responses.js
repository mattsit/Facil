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

exports.formalMealMessage = function(place, time, date) {
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
