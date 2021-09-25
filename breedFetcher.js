const request = require('request');
const args = process.argv;

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[2]}`,(error,response,body) => {

  if (error) {
    // Handle error
    console.log(`Error: Could not find page`); //give a wrong URL name to verify error message
    return;
  }
  console.log(body);
  console.log(typeof body); // actually a string

  //In order to scan this data like a JavaScript object,
  //we need to convert the string version of it into an object first.

  const data = JSON.parse(body); //JSON.parse to convert the JSON string into an actual object
  console.log(data);
  console.log(typeof data); //data is an object
  console.log(data[0].description); //Access the first entry in the data array and print out the description for the user.

});



