/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    $(window).load(function() {
      // Animate loader off screen
      $(".se-pre-con").fadeOut("slow");;
    });
  
  $.getJSON("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", function(json) {
    var pokedex = json;
    //var pokeName = pokedex.pokemon[x].name;
    //var pokeImage = pokedex.pokemon[x].img;
    var pokeList = $( "#pokeList" );
    
    var x = Math.floor(Math.random()*150) + 1;
    
    function givePokeName(x) {
      var pokeName = pokedex.pokemon[x].name
      return pokeName;
    }
    
    function givePokeImage(x) {
      var pokeImage = pokedex.pokemon[x].img
      return pokeImage;
    }
    
    function givePokeHeight(x) {
      var pokeHeight = pokedex.pokemon[x].height
      return pokeHeight;
    }
    
    function givePokeWeight(x) {
      var pokeWeight = pokedex.pokemon[x].weight
      return pokeWeight;
    }
    
    pokeList.append("<p>" + givePokeName(x) + "</p>");
    pokeList.append("<img src=" + givePokeImage(x) + ">");
    pokeList.append("<p class='data'>" + givePokeHeight(x) + "</p>");
    pokeList.append("<p class='data'>" + givePokeWeight(x) + "</p>");
    
  });