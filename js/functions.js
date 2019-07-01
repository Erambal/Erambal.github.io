/* Weather Site JavaScript Functions */
// Calculate the Windchill
function buildWC(speed, temp) {
        const feelTemp = document.getElementById('feelTemp');

        // Compute the windchill
        let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        console.log(wc);

        // Round the answer down to integer
        wc = Math.floor(wc);

        // If chill is greater than temp, return the temp
        wc = (wc > temp) ? temp : wc;

        // Display the windchill
        console.log(wc);
        // wc = 'Feels like '+wc+'°F';
        feelTemp.innerHTML = wc;
}
// Variables for Function Use
const temp = 31;
const speed = 5;
buildWC(speed, temp);

// Convert Meters function
function convertMeters(meters) {
        const getFeet = parseFloat(document.getElementById('getFeet')).Value;

        let feet = Math.round((meters * 3.28084) * 100) / 100;
        
       document.getElementById('getFeet').innerHTML = feet;

}
// Direction
 //Set your own value
windDial(direction);
// Wind Dial Function
function windDial(direction) {


// Get the wind dial container
const dial = document.getElementById("dial");
console.log(direction);

// Determine the dial class
switch (direction) {
        case "North":
        case "N":
                dial.setAttribute("class", "n"); //"n" is the CSS rule selector
                break;
        case "NE":
        case "NNE":
        case "ENE":
                dial.setAttribute("class", "ne");
                break;
        case "NW":
        case "NNW":
        case "WNW":
                dial.setAttribute("class", "nw");
                break;
        case "South":
        case "S":
                dial.setAttribute("class", "s");
                break;
        case "SE":
        case "SSE":
        case "ESE":
                dial.setAttribute("class", "se");
                break;
        case "SW":
        case "SSW":
        case "WSW":
                dial.setAttribute("class", "sw");
                break;
        case "East":
        case "E":
                dial.setAttribute("class", "e");
                break;
        case "West":
        case "W":
                dial.setAttribute("class", "w");
                break;
}
}
// Get the weather condition for images
let conditions = "clear";
let weatherKey = getCondition(conditions);
changeSummmaryImage(weatherKey);

function getCondition(conditions) {
        if (conditions.includes("clear") || conditions.includes("Clear")) {
                return "clear";
        }
        else if (conditions.includes("clouds") || conditions.includes("cloudy") || conditions.includes("Partly Cloudy")) {
                return "clouds";
        }
        else if (conditions.includes("fog") || conditions.includes("foggy")) {
                return "fog";
        }
        else if (conditions.includes("snow") || conditions.includes("snowy")) {
                return "snow";
        }
        else if (conditions.includes("Rain") || conditions.includes("rainy") || conditions.includes("Thunderstorms")) {
                return "rain";
        }
        else {
                console.log("Nada");
        }
}


function changeSummmaryImage(weatherKey) {
        const curweather = document.getElementById("curweather");

        switch (weatherKey) {

                case "clear":
                case "Clear":
                        curweather.setAttribute("class", "clear");

                        break;

                case "Cloudy":
                case "clouds":
                        curweather.setAttribute("class", "clouds");
                        break;

                case "Rain":
                case "rain":
                        curweather.setAttribute("class", "rain");
                        break;

                case "snow":
                case "Snow":
                        curweather.setAttribute("class", "snow");

                case "fog":
                case "Fog":
                        curweather.setAttribute("class", "fog");


                default:
                        console.log("Nada");
        }

}
        //This function will convert and format hours to a 12 hour format.
function format_time(hour){
                if (hour > 23) {
                        hour -= 24;
                }
                let amPM = (hour > 11) ? "pm" : "am";
                if (hour > 12) {
                        hour -= 12;
                }
                if (hour == 0) {
                        hour = "12";
                }
                return hour + amPM;
        }
// Build the hourly temperature list
function buildHourlyData(nextHour, hourlyTemps) {
        // Data comes from a JavaScript object of hourly temp name - value pairs
        // Next hour should have a value between 0-23
        // The hourlyTemps variable holds an array of temperatures
        // Line 8 builds a list item showing the time for the next hour 
        // and then the first element (value in index 0) from the hourly temps array
        let hourlyListItems = '<li>' + format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F</li> | ';
        // Build the remaining list items using a for loop
        for (let i = 1, x = hourlyTemps.length; i < x; i++) {
                hourlyListItems += '<li>' + format_time(nextHour + i) + ': ' + hourlyTemps[i] + '&deg;F</li> | ';
        }
        console.log('HourlyList is: ' + hourlyListItems);
        return hourlyListItems;
}
// Get the next hour based on the current time
let date = new Date();
let nextHour = date.getHours() + 1;

