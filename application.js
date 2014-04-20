
$(document).ready(function () {
  _500px.init({
    sdk_key: 'e521dca22d1a9645b30077fe649452d56e0c8c4b'
  });


  _500px.api('/photos', {feature: 'popular', page: 1}, function (response) {
    if (response.success) {
        alert('There are ' + response.data.photos.length + ' photos.');
        // scraper();
    } else {
        alert('Unable to complete request: ' + response.status + ' - ' + response.error_message);
    }
  });

  // function scraper(){
  //   alert('There are ' + response.data.photos.length + ' photos.');
  // }

});

