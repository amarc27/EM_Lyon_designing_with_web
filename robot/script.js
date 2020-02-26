/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    $(window).load(function() {
      // Animate loader off screen
      $(".se-pre-con").fadeOut("slow");;
    });
  
  
  $.getJSON("https://api.tvmaze.com/singlesearch/shows?q=mr-robot&embed=episodes", function(json) {
    var data = json;
    var episodes = data._embedded.episodes;
    var all = $('#all-cards');
    
    var i = 0;
    while (i < 9) {
      all.append("<div class='card' style='width: 18rem;'>\
                <img class='card-img-top' src='" + episodes[i].image.original + "' alt='Card image cap'>\
                  <div class='card-body'>\
                    <h5 class='card-title'>" + episodes[i].name + "</h5>\
                    <p class='card-text'>" + episodes[i].summary + "</p>\
                    <a href='" + episodes[i].url + "' class='btn btn-primary'>Check it</a>\
                  </div>\
              </div>");
      i++;
    }
  });