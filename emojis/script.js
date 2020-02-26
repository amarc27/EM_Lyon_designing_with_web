/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    $.getJSON("https://api.github.com/emojis", function(json) {
      var emojis = json;
      var keys = Object.keys(emojis);
      var values = Object.values(emojis);
      var emojiList = $( "#emojiList" );
      
      var x = Math.floor(Math.random()*1300) + 1;
      
      for (var i = x; i < (x + 180); i = i + 1) {
        emojiList.append("<img src=" + values[i] + ">");
      }
      
    });