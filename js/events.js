function getIt() {
  $('p').on("click", function () {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty");
  })
}

function pressIt() {
  $('#typing').on("keydown", function(press) {
    if (press.which === 71) {
      alert("You have entered g.");
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.");
  })
}// call f/define functions here

$(document).ready(function(){

});
