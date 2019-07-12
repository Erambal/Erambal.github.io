let Nav = document.getElementById('nav');

Nav.addEventListener('click', function(evt){
    // Get the city name
    let name = evt.target.innerHTML;
    switch (name) {
      case "Anvil":
        case "Explosives":
          case "Decoys":
              case "Traps":
            console.log(name);
            evt.preventDefault();
        break;
    }
})


function nav(){
  let nav = "<li>Home</li>";
  let acme = "../finalproject\acme\js\acme.json"
  
  fetch(acme)
    .then(function(response) {
      if(response.ok){
        return response.json();
      }
      throw new Error("Network response was no bueno.");
    })
    .then(function(data){
      console.log(data);
//Create array with all of the different keys
let product = Object.keys(data);
     console.log(product);
    })
    .catch(function(error){
      console.log("There was a fetching problem: ", error.message);
    })
}
nav();
      
