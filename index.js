// function for calculating the distance between two GPS points, this is a rough calculation that does not take curvature fo the earth into account, the 'distance' variable utilizes the Pythagorean theorem

function dist(i,j,m,n){
  var latitude = Math.ceil((i - m) * 10000) / 10000;
  var longitude = Math.ceil((j - n) * 10000) / 10000;
  if(latitude < 0){
    latitude = latitude * -1;
  }
  if(longitude < 0){
    longitude = longitude * -1;
  }
  
  var lat = latitude.toString();
  var lon = longitude.toString();
  var latDist = Number(lat[0] * 69) + Number(lat[2] * 6.91) + Number(lat[3] * 0.69) + Number(lat[4] * 0.0691287) + Number(lat[5] * 0.00691287);
  var lonDist = Number(lon[0] * 47.12) + Number(lon[2] * 4.71) + Number(lon[3] * 0.472) + Number(lon[4] * 0.04715) + Number(lon[5] * 0.0047348);
  var distance = Math.ceil((Math.sqrt((lonDist * lonDist) + (latDist * latDist))) * 100) / 100;
  return distance;
}

console.log(dist(47.0,122.0,47.4,122.6));