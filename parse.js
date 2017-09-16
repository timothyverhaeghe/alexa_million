var request = require('request');
var unzip   = require('unzip');
var csv2    = require('csv2');
var fs = require('fs');
var program = require('commander');

program
  .version('0.1.0')
  .option('-c, --country [type]', 'Give a country to save the file')
  .option('-t, --tld [type]', 'Give a tld to parse')
  .parse(process.argv);

if(program.country && program.tld){
  request.get('http://s3.amazonaws.com/alexa-static/top-1m.csv.zip')
  .pipe(unzip.Parse())
  .on('entry', function (entry) {
      entry.pipe(csv2()).on('data', function(array){
        if(array[1].indexOf(program.tld) > -1){
          fs.appendFile('country/' + program.country + '.txt', array[0] + "\t" +array[1] + "\n", function (err) {
            if (err) throw err;
            console.log(array[0] + "\t" +array[1])
          });
        } else {
          console.log(array[0] + "\t" +array[1])
        }
      });
  });
} else {
  console.log("CLI parameter missing. Please see --help for the correct use of CLI parameters.")
}
