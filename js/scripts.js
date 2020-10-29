$(document).ready(function () {
  $("form#generator").submit(function (event) {
    event.preventDefault();
    let num = parseInt($("input#userNumber").val());
    let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        numRoman =  "";
      for(let i=0; i<numbers.length; i++) {
        while(num>=numbers[i]){
          numRoman = numRoman + romanNumeral[i];
          num = num - numbers[i];
        }
      };
    $("p").text(numRoman);
      });
  });


