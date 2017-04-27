
function triangle(side1, side2, side3) {
  if (!side1 || !side2 || !side3) {
    alert("Enter numbers!")
  }
  else if ((side2+side3 <= side1) || (side1+side2 <= side3) || (side1+side3 <= side2)) {
    alert("Not a triangle")
  }
  else if (side1==side2&&side2==side3&&side1==side3) {
    alert("Equilateral")
  }
  else if (side1==side2||side2==side3||side1==side3) {
    alert("Isosceles")
  }
  else {
    alert("Scalene")
  }
}

$(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    triangle(parseInt($("#side1").val()), parseInt($("#side2").val()), parseInt($("#side3").val()));
    console.log(parseInt($("#side1").val()));
    console.log(parseInt($("#side2").val()));
    console.log(parseInt($("#side3").val()));
  });
});
