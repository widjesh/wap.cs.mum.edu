"use strict";
let status = "menu";
$(document).ready(function() {
  $("#start").click(function() {
    start();
    status = "playing";
  });

  $("#end").mouseover(function(evt) {
    notification(evt, "You win");
    status = "menu";
    reset();
  });
});

const start = function() {
  let lose = "You lose";
  if (status === "playing") {
    $(".boundary").mouseover(function(evt) {
      $(".boundary").addClass("youlose");
      notification(evt, lose);
    });

    $("#maze").mouseleave(function(evt) {
      $(".boundary").addClass("youlose");
      notification(evt, lose);
    });
  }
  $(".boundary").removeClass("youlose");
};

function reset() {
  $("#end").mouseleave(function() {
    status = "menu";
  });
}

function notification(evt, param) {
  alert(param);
  evt.stopImmediatePropagation();
}
