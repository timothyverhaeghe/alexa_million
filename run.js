var request = require('request');
var unzip   = require('unzip');
var csv2    = require('csv2');
var fs = require('fs');

request.get('http://s3.amazonaws.com/alexa-static/top-1m.csv.zip')
    .pipe(unzip.Parse())
    .on('entry', function (entry) {
        entry.pipe(csv2()).on('data', function(array){
          if(array[1].indexOf('.be') > -1){
            fs.appendFile('belgium.txt', array[0] + "\t" +array[1] + "\n", function (err) {
              if (err) throw err;
              console.log(array[0] + "\t" +array[1])
            });
          } else {
            console.log(array[0] + "\t" +array[1])
          }
        });
    })
;
