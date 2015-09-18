var convertToArray = function(input){
  return input.split("");
}

var isBinary = function(number){
  return number.match(/[01]/g) !== null;
}

var isBinaryArray = function(input){
  var isBinaryArray = true;
  var inputArray = convertToArray(input);
  for (var i in inputArray){
    if(!isBinary(inputArray[i])){
      isBinaryArray = false;
    }
  }
  return isBinaryArray;
}

var reverseArray = function(array){
  var newArray = [];
  for(var i = array.length-1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

var BinaryToDecimal = function(input) {
  var newArray = reverseArray(convertToArray(input));
  var result = 0;
  for (var i in newArray){
    result += (parseInt(newArray[i]) * Math.pow(2, i));
    console.log(newArray[i] + "\* 2\^" + i);
  }
  return result;
}

$(document).ready(function() {
  $("form#BinaryToDecimal").submit(function(event) {
    $(".error").empty();
    $(".output").empty();
    var input = $("input#input").val();
    var output;
    if(isBinaryArray(input)){
      output = BinaryToDecimal(input);
    }else {
      output = "";
      $(".error").append("Invalid input. Please enter a binary number!");
    }
    $(".error").fadeIn();
    $(".input").text(input).fadeIn();
    $(".output").text(output).fadeIn();

    event.preventDefault();
  });
});
