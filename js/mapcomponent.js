var startLoc;
var endLoc;
var search1;
var ticker;
var ticker2;
var marker;
(function() {
  'use strict';

  var map1 = document.querySelector('#map1');
  var marker1 = document.querySelector('#marker1');
  var dir1 = document.querySelector('#directions1');
  //var instructions = document.querySelector('#instructions');
  var searchStr = document.querySelector('#searchbox');
  search1 = document.querySelector('#search1');
  ticker = 1;
  ticker2 = 1;

  dir1.addEventListener('google-map-response', function(e) {
    //array of driving directions
    console.log(e);
    var steps = e.detail.response.routes[0].legs[0].steps;
    for (var i = 0; i < steps.length; i++) {
      instructions.innerHTML += "<li>" + steps[i].instructions + "</li>";
    }
  });

  search1.addEventListener('google-map-search-results', function(e) {
    console.log('search fired');
    var res = e.detail;
    populateSuggestions(res, searchStr.value);
    // for (var i = 0; i <= 1; i++)
    // {
    //   console.log(res[i].name, res[i].latitude, res[i].longitude);
    //   makeMarker(res[i]);
    // }
  });

  searchStr.addEventListener('keyup', function(e) {
    if (e.keyCode == 18)
    {
      console.log(searchStr.value);
      search1.query = searchStr.value;
      search1.map = map1.map;
    }
  });

  navigator.geolocation.getCurrentPosition(function(pos) {
    map1.longitude = pos.coords.longitude;
    map1.latitude = pos.coords.latitude;

    marker1.longitude = pos.coords.longitude;
    marker1.latitude = pos.coords.latitude;   

    // dir1.startAddress = pos.coords.latitude + ', ' + pos.coords.longitude;
    // dir1.endAddress = 'Martins BBQ Nashville, TN';
    // dir1.map = map1.map; 
  })

})();

function populateSuggestions(spots, term) {
  var locList = document.querySelector('#locsuggestions');
  var listItem, listText;
  for (var i = 0; i < 9; i++)
  {
    if (i === 0)
    {
      listText = document.createTextNode('search for ' + term);
    }
    else 
    {
      makeMarker(spots[i-1]);
      listText = document.createTextNode(spots[i-1].name);
    }
    listItem = document.createElement('li');
    listItem.id = "result" + ticker2;
    ticker2++;
    listItem.appendChild(listText);
    locList.appendChild(listItem);
  }
};

function makeMarker(spot) {
  marker = document.createElement('google-map-marker');
  marker.id = "newmarker" + ticker;
  marker.latitude = spot.latitude;
  marker.longitude = spot.longitude;
  marker.title = spot.name;
  marker.info = spot.name;
  marker.classList.add('gmark');
  console.log('made marker with title ', marker.title);
  marker.map = document.querySelector('#map1').map;
  console.log('new marker id is ', marker.id);
  ticker += 1;
};



