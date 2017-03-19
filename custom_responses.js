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

exports.formatDinnerMessage = function(place, date, time) {
  return "Hey! How about {0} at {1}, {2}?".format(place, date, time);
}

