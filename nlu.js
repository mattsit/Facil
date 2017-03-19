var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

module.exports = function() {
  this.nlu = null;
  this.nlu_ready = false;

  this.init = function(user, pass) {
    this.nlu = new NaturalLanguageUnderstandingV1({
      'username': user,
      'password': pass,
      'version_date': '2017-02-27'
    });

    this.nlu_ready = true;
  }
  
  this.analyze_text = function(str, cb) {
    if (!this.nlu_ready) {
      console.error("NLU not initialized");
      return "";
    }

    var parameters = {
      'text': str,
      'features': {
        'keywords': {
          'limit': 2
        }
      }
    }

    this.nlu.analyze(parameters, function(err, resp) {
      if (err) {
        console.error(err);
        return "";
      }
      cb(resp);
    });
  }
}

