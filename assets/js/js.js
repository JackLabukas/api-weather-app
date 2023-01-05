const APIkey = "d057a1d2ec2b9d19a08ab16c00550de2";
var cityLat;
var cityLon;
var locationArr = [];

console.log("hello");
// api call to get London lat and lon
function apiCall(location) {
  var queryURL =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    location +
    "&limit=5&appid=" +
    APIkey;

  $.ajax({ url: queryURL, method: "GET" }).then(function (response) {
    console.log(response);

    console.log(response[0].lat, response[0].lon);
    cityLat = response[0].lat;
    cityLon = response[0].lon;
    locationArr.push(location);
    localStorage.setItem("location", JSON.stringify(locationArr));
  });
}

$("#search-button").on("click", function (event) {
  event.preventDefault();
  var userInput = $("#search-input").val().trim();
  apiCall(userInput);
});

function displayCity() {
  var citiesArr = JSON.parse(localStorage.getItem("location"));
  console.log(citiesArr);
  citiesArr.forEach(function (item) {
    var div = $("<div>");
    div.text(item);
  });
}
