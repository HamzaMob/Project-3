function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.88897689290725, lng: -87.6262664868291 },
    zoom: 18,
	zoomControl: false,
    scaleControl: true,
	mapTypeId: 'hybrid'
  });
  
  var marker = new google.maps.Marker({
    position: { lat: 41.88897689290725  , lng: -87.6262664868291},
    map: map,
  new google.maps.Marker({
    position: myLatLng = { lat: 41.88897689290725, lng: -87.6262664868291 },
    map,
    title: "marker",
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:"Trump Tower"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;