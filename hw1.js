// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw1
// (Windows)   cd c:\code\hw1
// Then type:
// node hw1.js

// HOMEWORK 1

// Given the following JavaScript object that represents weather data,
// write a weather summary out to the screen, when this code is executed.
// Something like this:

// Currently it is 67 degrees and sunny. Tomorrow it will be 65 and Mostly Cloudy.
// The next day it we will see Partly Cloudy skies, with a temperature of 70.

let weatherData = {
  current: {
    temperature: 67,
    conditions: "Sunny"
  },
  forecast: [
    { temperature: 65, conditions: "Mostly Cloudy" },
    { temperature: 70, conditions: "Partly Cloudy" }
  ]
}
let temperature=["65","70"];
let forecast=["Mostly Cloudy","Partly Cloudy"];
console.log("Currently it is " + weatherData.current.temperature+" degrees and sunny.");
console.log("Tomorrow it will be " + temperature[0] + " and " + forecast[0] +".");
console.log("The next day we will see " + forecast[1] + " skies, with a temperature of " + temperature[1] +".");
