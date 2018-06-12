const drawMap = function(){
  const mapDiv = document.getElementById("main-map");
  const glasgow = [55.8768712, -4.2747476];
  const zoomLevel = 15;
  const javaStreet = [55.801507, -4.003805]
  const mainMap = new MapWrapper(mapDiv, javaStreet, zoomLevel);

  mainMap.addMarker(javaStreet);

  const japan = [36.697376, 138.7297723]

  const button = document.querySelector('#take-me');
   button.addEventListener('click', function(){
       mainMap.moveTo(japan)
   });
}
window.addEventListener('load', drawMap);
