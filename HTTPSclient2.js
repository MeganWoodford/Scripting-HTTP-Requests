var request = require('https');
var buffer = '';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  request.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      return buffer += data;
      console.log(buffer, '/n');
    });
  //when i receive data (on), what am i gonna do with it
  //buffer is a chunk of memory, what represents it?
  //a variable.
  //one event is i

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(buffer.toString());
    });
  });
}
getAndPrintHTML();
