mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: co_ordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

console.log(co_ordinates);

const marker2 = new mapboxgl.Marker({ color: 'red' })
.setLngLat(co_ordinates)
.addTo(map);