
let pageNav = document.getElementById('page1-nav');
let weatherURL = "/js/weather.json";
let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('main-content');

pageNav.addEventListener('click', function(evt){
// Get the city name
let cityName = evt.target.innerHTML;
switch (cityName) {
  case "Franklin":
    case "Greenville":
      case "Springfield":
        console.log(cityName);
        evt.preventDefault();
    break;
}

let hourlyList= document.getElementById('hourlyData');
let contentContainer = document.getElementById('main-content');
//function fetchData(weatherURL) {
  //let cityName = 'Greenville'; // The data we want from the weather.json file
  
  fetch(weatherURL)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Network response was not OK.');
    })
    .then(function(data) {
      // Check the data object that was retrieved
      console.log(data);
      // data is the full JavaScript object, but we only want the greenville part
      // shorten the variable and focus only on the data we want to reduce typing
      let g = data[cityName];

      // ************ Get the content ******************************

      // Get the location data
      let locName = g.City;
      let locState = g.State;
      // Put them together
      let fullName = locName + ', ' + locState;
      // See if it worked
      console.log('fullName is: ' + fullName);

      // Get the temperature data
      let locTemp = g.Temp;
      console.log(locTemp);
      // Get the wind data 
      let wind = g.Wind;
      console.log(wind);

      // Get the current conditions
      let curCond = g.Summary;
      console.log(curCond);
      let weatherKey = getCondition(curCond);
      changeSummmaryImage(weatherKey);
      console.log(weatherKey);

    // Get the high temperature
      let highTemp = g.High;
      console.log(highTemp);
      
      // Get the low temperature
      let lowTemp = g.Low;
      console.log(lowTemp);

      //Get the precipitation
      let precip = g.Precip;
      console.log(precip);

      // Get the direction data
      let direction = g.Direction;
      console.log(direction);

      windDial(direction);

      // Get gusts
      let gusts = g.Gusts;
      console.log(gusts);

      // Get Longtitude
      let longitude = g.Longitude;
      console.log(longitude);

      // Get latitude
      let latitude = g.Latitude;
      console.log(latitude);

      // Get Zip Location
      let zip = g.Zip;
      console.log(zip);
        
      // Get the hourly data 
        let hours = g.Hourly;
        console.log(hours);
      
      // Get elevation
      let elevation = g.Elevation;
      console.log(elevation);

      convertMeters(elevation);

    



      // ************ Display the content ******************************
      // Set the title with the location name at the first
      // Gets the title element so it can be worked with
      let pageTitle = document.getElementById('page-title');
      // Create a text node containing the full name 
      let fullNameNode = document.createTextNode(fullName);
      // inserts the fullName value before any other content that might exist
      pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
      // When this is done the title should look something like this:
      // Greenville, SC | The Weather Site

      // Set the Location information
      document.getElementById('longitude').innerHTML = longitude;
      document.getElementById('latitude').innerHTML = latitude;
      document.getElementById('zip').innerHTML = zip;
      
      // Get the h1 to display the city location
      let contentHeading = document.getElementById('contentHeading');
      contentHeading.innerHTML = fullName;
      // The h1 in main h1 should now say "Greenville, SC"

      // Set the temperature information
      document.getElementById('locTemp').innerHTML = locTemp + "&#176;F";
      document.getElementById('high').innerHTML = highTemp + "&#176;F"; 
      document.getElementById('low').innerHTML = lowTemp + "&#176;F"; 

      // Set the wind information
      document.getElementById('wind-speed').innerHTML = wind + " mph";
      document.getElementById('direction').innerHTML = direction;
      document.getElementById('gusts').innerHTML = gusts;

      
      buildWC(wind, locTemp);
      // Set the current conditions information
      document.getElementById('curCond').innerHTML = curCond;

      // Set the hourly temperature information
    let forcastHour = buildHourlyData(nextHour, hours);
    document.getElementById('time').innerHTML = forcastHour;
    


      // Change the status of the containers
      contentContainer.setAttribute('class', ''); // removes the hide class
      statusContainer.setAttribute('class', "hide"); // hides the status container
  
    })
    .catch(function (error) {
      console.log('There was a fetch problem: ', error.message);
      statusContainer.innerHTML = 'Sorry, the data could not be processed.';
    })
  })

//ends funciton