$( document ).ready(function() {
  console.log("Hello World");
  // $(".jq").text("Goodbye");

  $(".button-player-1-life").on("click", function() {
    blinkThis(this);
    var lifeModifier = $(this).data("life");
    // console.log(lifeModifier);
    var lifeCurrent = parseInt($(".display-player-1-life").text());
    // console.log(lifeCurrent);
    var lifeNew = lifeCurrent + lifeModifier;
    // console.log(lifeNew);
    $(".display-player-1-life").text(lifeNew);
  });

  $(".button-player-2-life").on("click", function() {
    blinkThis(this);
    var lifeModifier = $(this).data("life");
    // console.log(lifeModifier);
    var lifeCurrent = parseInt($(".display-player-2-life").text());
    // console.log(lifeCurrent);
    var lifeNew = lifeCurrent + lifeModifier;
    // console.log(lifeNew);
    $(".display-player-2-life").text(lifeNew);
  });

  $(".button-central-icon").on("click", function() {
    var buttonType = $(this).data("button");
    // console.log(buttonType);
    if (buttonType == "reset") {
        $(".display-player-1-life").text(10);
        $(".display-player-2-life").text(10);
    }
    else if (buttonType == "turn") {
      var coinFlip = Math.round(Math.random());
      // console.log(coinFlip);
      if (coinFlip == 0) {
        $(".display-player-1").animate({"background-color":"#80b76e"}, 100, function() {
          $(".display-player-1").animate({"background-color":"black"}, 400);
        });
      }
      else if (coinFlip == 1) {
        $(".display-player-2").animate({"background-color":"#80b76e"}, 100, function() {
          $(".display-player-2").animate({"background-color":"black"}, 400);
        });
      }
    }
    else if (buttonType == "settings") {
      console.log("Settings");
      var modal = document.getElementById('settings-modal');
      $("#settings-modal").css("display", "block");
      $(window).on("click", function(event) {
        if (event.target == modal) {
          console.log("Close");
          $("#settings-modal").css("display", "none");
          $(window).off();
        }
      });
    }
  });

  function blinkThis (blinkTarget) {
    $(blinkTarget).animate({"background-color":"white"}, 50, function() {
      $(blinkTarget).animate({"background-color":"black"}, 50);
    });
  }

});
