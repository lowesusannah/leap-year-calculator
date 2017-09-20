//back-end logic
var isLeapYear = function(input){
  return false;
}




//front-end logic
$(document).ready(function(){
  $("form").submit(function(event){
    var input = parseInt($("input#user-input").val());
    var output = isLeapYear(input);

    if (output) {
      $("#output").text(input + " is a leap year! Congrats!")
    } else {
      $("#output").text(input + " is not a leap year. Sorry :(")
    }

  });
});
