var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var properties = require('properties');

var nlu_user = 'PLACEHOLDER';
var nlu_pass = 'PLACEHOLDER';
var options = {
  path: true,
  sections: true,
}

properties.parse("./watson_creds.properties", options, function (error, obj) {
  if (error) return console.error (error);
  console.log(obj);

  nlu_user = obj.nlu.username;
  nlu_pass = obj.nlu.password;

  test_nlu();
});


function test_nlu() {
  console.log (nlu_user);
  var natural_language_understanding = new NaturalLanguageUnderstandingV1({
    'username': nlu_user,
    'password': nlu_pass,
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
}
