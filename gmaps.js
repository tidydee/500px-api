
    var capetown = new google.maps.LatLng(-33.9231423, 18.42347, 1);
    var sydney = new google.maps.LatLng(-33.8749401, 151.2226043, 2);
    // var locationArray = [capetown, sydney];
    // var locationNameArray = ['Cape Town', 'Sydney'];
    var image1 = 'images/za.png';
    var image2 = 'images/au.png';

    // var marker;
    var map;

    function initialize() {
      var mapOptions = {
        zoom: 2,
        center: capetown
      };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    marker = new google.maps.Marker({
      map:map,
      icon: image1,
      draggable:true,
      animation: google.maps.Animation.DROP,
      position: capetown
    });

    marker2 = new google.maps.Marker({
      map:map,
      icon: image2,
      draggable:true,
      animation: google.maps.Animation.DROP,
      position: sydney
    });

    // FOR USING MULTIPLE MARKERS
    // var coord;
    // for (coord in locationArray) {
    //   marker = new google.maps.Marker({
    //     position: locationArray[coord],
    //     // position: map.getCenter(), //makes point bounce! Very intersesting!
    //     draggable: true,
    //     map: map,
    //     icon: image,
    //     animation: google.maps.Animation.DROP,
    //     title: locationNameArray[coord]
    //   });
    // }


  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });  


  google.maps.event.addListener(marker, 'click', toggleBounce);
  }

  function toggleBounce() {

    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

google.maps.event.addDomListener(window, 'load', initialize);

  