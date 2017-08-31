//back end ----------------------------------------------

function Pizza(size, topping,) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.finalPrice = function() {
  var total = 0
  if (this.size === "small"){
    total += 8;
  } else if (this.size === "medium") {
    total += 12;
  } else {
    total += 16;
  }

  for (var a = 0; a < this.topping.length; a++) {
    total +=1;
  }

  return total;
};


//front end--------------------------------------------------

$(document).ready(function() {
  $("form#pizzaform").submit(function(event) {
    event.preventDefault();

    var userSize = $("select#size").val();
    var userToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
    userToppings.push($(this).val());
    });

  $("#button").click(function(){
    $(".results").show();
    $(".finalPrice").text(userToppings.price());
    });
  });
});
