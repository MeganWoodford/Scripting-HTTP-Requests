var request = require('https');
var buffer = '';

module.exports = function getHTML(options, callback) {

  request.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      return buffer += data;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      var result = buffer.toString();
      callback(result);
    });
  });
}
