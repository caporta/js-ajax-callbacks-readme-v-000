$(document).ready(function(){

  $.get("html/sentence.html", function(response) {

    $("#sentences").html(response);

  }).fail(function (error) {

    console.log("Something went wrong: " + error);

  });

});
