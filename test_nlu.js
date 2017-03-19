var nlu = require('./nlu.js');
var properties = require('properties');

var n = new nlu();
var nlu_user;
var nlu_pass;

properties.parse("./watson_creds.properties", { path: true, sections: true }, function (error, obj) {
  if (error) return console.error (error);

  nlu_user = obj.nlu.username;
  nlu_pass = obj.nlu.password;
  
  n.init(nlu_user, nlu_pass);

  n.analyze_text("i hate people who say one two three", (resp) => {console.log(JSON.stringify(resp, null, 2))});
});


