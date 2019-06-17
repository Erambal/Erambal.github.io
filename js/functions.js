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
    wc = (wc > temp)?temp:wc;
   
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
const meters = 1514.246;
function convertMeters(meters){
        const getFeet = parseFloat(document.getElementById('getFeet')).Value;

        let feet = Math.round((meters * 3.28084) * 100) / 100;

        document.getElementById('getFeet') = feet;

}
// Direction
const direction = "S"; //Set your own value
windDial(direction);
    // Wind Dial Function
function windDial(direction){

}
// Get the wind dial container
const dial = document.getElementById("dial");
console.log(direction);

// Determine the dial class
switch (direction){
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
// Get the weather condition for images
let conditions = "clear";
let weatherKey = getCondition(conditions);
changeSummmaryImage(weatherKey);

function getCondition(conditions){
if (conditions.includes("clear") || conditions.includes("Clear")){
        return "clear";
}
else if (conditions.includes("clouds") || conditions.includes("cloudy")){
        return "clouds";
}
else if (conditions.includes("fog") || conditions.includes("foggy")){
        return "fog";
}
else if (conditions.includes("snow") || conditions.includes("snowy")){
          return "snow";}
else if (conditions.includes("rain") || conditions.includes("rainy")){
        return "rain"; 
}
else {console.log("Nada");
}
}
        

function changeSummmaryImage(weatherKey){
const curweather = document.getElementById("curweather");

switch (weatherKey) {

    case "clear":
    case "Clear":
      curweather.setAttribute("class", "clear");

      break;
    
      case "Cloudy":
    case "cloudy":
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