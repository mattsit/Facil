var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var properties = require('properties');

var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'c9c50d09-6398-4399-95f8-f06c2f8b721c',
  'password': 'bbEzLnHarKIG',
  'version_date': '2017-02-27'
});

var parameters = {
  'text': 'Do you want to get food?',
  'features': {
    'keywords': {
      'emotion': false,
      'sentiment': false,
      'limit': 2
    }
  }
}

natural_language_understanding.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});
