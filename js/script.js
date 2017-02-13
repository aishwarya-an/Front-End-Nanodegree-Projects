var map;
var markers = [];

// Storing the locations
var locations = [
  {title: "Fortis Hospital", location: {lat: 12.894531, lng: 77.598903}},
  {title: "Manipal Hospital", location: {lat: 12.958900, lng: 77.649198}},
  {title: "NIMHANS", location:{lat: 12.940682, lng: 77.598264}},
  {title: "HOSMAT Hospital", location: {lat: 12.969034, lng: 77.61346}},
  {title: "Columbia Asia", location: {lat: 13.050987, lng: 77.593789}},
  {title: "Sagar Hospitals", location: {lat: 12.907708, lng: 77.565115}},
  {title: "Vikram Hospital", location: {lat: 12.988192, lng: 77.592169}},
  {title: "Apollo Hospital", location: {lat: 12.896128, lng: 77.598535}},
  {title: "Mallya Hospital", location: {lat: 12.968064, lng: 77.595068}}
];


// @description Creates a map
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 12.968064, lng: 77.595068},
    zoom: 13
  });

  var largeInfowindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();

  // The following group uses the location array to create an array of markers 
  // on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;
    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i
    });
    // Push the marker to the array of markers.
    markers.push(marker);
    // Create an onclick event to open an infowindow at each marker.
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);
    });
    bounds.extend(markers[i].position);
  }

  // Extend the boundaries of the map for each marker
  map.fitBounds(bounds);
}

// This function populates the infowindow when the marker is clicked.
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div>' + marker.title + '</div>');
    infowindow.open(map, marker);
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick',function(){
      infowindow.setMarker = null;
    });
  }
}

function showError(){
  alert("Failed loading the Google Map API!!!");
}
