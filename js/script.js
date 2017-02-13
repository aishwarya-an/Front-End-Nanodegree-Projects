var map;

// Storing the locations
var locations = [
  {title: "Fortis HealthCare", location: {lat: 12.894531, lng: 77.598903}},
  {title: "NIMHANS", location:{lat: 12.940682, lng: 77.598264}},
  {title: "Columbia Asia", location: {lat: 13.050987, lng: 77.593789}},
  {title: "Apollo Hospital", location: {lat: 12.896128, lng: 77.598535}},
  {title: "BGS Global Hospital", location: {lat: 12.902874, lng: 77.497798}}
];


// @description Creates a map
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 12.940682, lng: 77.598264},
    zoom: 13
  });
  ko.applyBindings(new ViewModel());
}


// @description The viewmodel
function ViewModel (){
  var infoWindow = new google.maps.InfoWindow();
  var bounds = new google.maps.LatLngBounds();
  var self = this;
  self.list = ko.observableArray([]);
  self.filter = ko.observable('');

  // @description Hospital object contains the marker and functionality
  // to populate infowindow.
  function Hospital(obj) {
    var self = this;
    self.title = obj.title;
    self.latitude = obj.location.lat;
    self.longitude = obj.location.lng;
    self.marker = new google.maps.Marker({
      title: self.title,
      position: {lat: self.latitude, lng: self.longitude},
      map: map 
    });

    // @description When clicked on the marker the infoWindow pops.        
    self.marker.addListener('click', function() {
        self.populateInfoWindow(self.marker, infoWindow);
        
     });

    // @description To pop the infowindow
    self.populateInfoWindow = function(marker, infoWindow) {
      // Checking whether the infowwindow is open
      if (infoWindow.marker != marker) {
        infoWindow.marker = marker;
        // Add animation when clicked 
        marker.setAnimation(google.maps.Animation.BOUNCE);
          
        // Info in the infowindow
        var content = '<h2>' + self.title + '</h2><h3>Wiki Links</h3><ul>';
        infoWindow.setContent(content);
        // The wiki link in the infowindow  
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + marker.title + "&format=json&callback=wikiCallback";
        $.ajax(url, {
          dataType: 'jsonp',
          jsonp: "callback",
          success: function(data){
            var list = data[1];
            var article = list[0];
            var newContent = infoWindow.getContent() + "<li><a href='https://en.wikipedia.org/wiki/" + article + "'>" + marker.title + "</a></li></ul>";
            infoWindow.setContent(newContent);
          }, error: function(){
          	// If the api does not load
              var newContent = infoWindow.getContent() + 
                  "<p>Failed to load the wiki links</p>";
              infoWindow.setContent(newContent);
            }
        });
                                    
        // Pop up the infowindow
        infoWindow.open(map, marker);
        // When closed, the animation should stop.
        infoWindow.addListener('closeclick', function() {
          infoWindow.marker = null;
          marker.setAnimation(null);
        });
      }
    };
    // End of Hospital object.
  }
    
      
  // @description Renders all the locations.
  function render(location) {
    // Creates Hospital objects and stores it in self.list
    var current;
    var currentList = [];
    for(var i = 0; i < location.length; i++){
        current = new Hospital(location[i]);
        currentList.push(current);
        bounds.extend(current.marker.position);
    }
    self.list(currentList);
    map.fitBounds(bounds);
  }

  // @description Filters the list as soon as an input is given
  self.filterList = ko.computed(function(){
    // An array storing all the filitered list
    var filtered = [];
    for(var i = 0; i < self.list().length; i++){
      var title = self.list()[i].title.toLowerCase();
      // Checking if the filter matches the objects in the list
      if(title.indexOf(self.filter()) != -1){
        filtered.push(self.list()[i]);
        self.list()[i].marker.setVisible(true);
      }
      else
        self.list()[i].marker.setVisible(false);
    }
    return filtered;
  });

  // The infowindow must pop up when an object in the list is clicked
  self.loadWindow = function (hospital){
      hospital.populateInfoWindow(hospital.marker, infoWindow);
  };

  // Calling the render function to render all objects in the list
  render(locations);
}

// @description Shows error when Google Map API is not loaded.
function showError(){
  alert("Failed loading the Google Map API!!!");
}
