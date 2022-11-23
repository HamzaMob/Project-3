function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21.435376, lng: -39.824574 },
    zoom: 15,
	zoomControl: false,
    scaleControl: true,
	mapTypeId: 'hybrid'
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 21.435376 , lng: -39.824574},
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"The clock Tower"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;