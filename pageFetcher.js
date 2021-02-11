const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

request(args[0], (error, response, body) => {
  console.log("error: ", error)
  console.log('statusCode:', response && response.statusCode); 
  fs.writeFile(args[1], body, (err) => {
    if (err) throw err
    console.log(`Downloaded and saved bytes to ${args[1]}`)
  });
})

