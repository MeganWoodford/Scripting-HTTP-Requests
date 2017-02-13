var request = require('https');
var buffer = '';

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

  request.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      return buffer += data;
      callback(buffer, '/n');
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(buffer.toString());
    });
  });
}
function printHTML (html) {
  console.log(html);
}
getHTML(requestOptions, printHTML);
