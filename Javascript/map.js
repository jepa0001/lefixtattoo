function initialize() {
  var mapOptions = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  };
  var map = new google.maps.Map(
    document.getElementById("map-canvas"),
    mapOptions
  );

  // Resize stuff...
  google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}
