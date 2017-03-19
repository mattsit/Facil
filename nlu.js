var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var properties = require('properties');

var nlu_user = 'PLACEHOLDER';
var nlu_pass = 'PLACEHOLDER';

properties.parse("./watson_creds.properties", { path : true, sections: true }, function (error, obj) {
  if (error) return console.error (error);

  nlu_user = obj.nlu.username;
  nlu_pass = obj.nlu.password;
});

console.log("value of nlu_user:\n Expected: watson_user; Actual: " + nlu_user);

/*
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
    console.log('error:');
  else
    console.log(JSON.stringify(response, null, 2));
});
*/
