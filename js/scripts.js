//back-end logic
var isLeapYear = function(input){
  return input % 400 === 0 || input % 4 === 0 && input % 100 !== 0;
}

//front-end logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault()
    var input = parseInt($("input#user-input").val());
    var output = isLeapYear(input);

    if (output) {
      $("#output").text(input + " is a leap year! Congrats!")
    } else {
      $("#output").text(input + " is not a leap year. Sorry :(")
    }
  });
});
