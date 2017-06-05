var request = require('request');
var fs = require('fs');

console.log("Downloading image...");

request.get('https://sytantris.github.io/http-examples/future.jpg')
   .on('error', function (err) {
      throw err;
   })
   .on('response', function (response) {
      console.log('Response Status Code: ', response.statusCode);
      console.log('Response Message: ', response.statusMessage);
      console.log('Response Content Type: ', response.headers['content-type']);
   })
   .pipe(fs.createWriteStream('./future.jpg'))
   .on('finish', function(){
      console.log("Downloading complete.");
   });


// *** could also be written using variable. ***

// var stream = request.get('https://sytantris.github.io/http-examples/future.jpg')

// stream.on('finish', function(){
//    console.log("Downloading complete.");
// });
