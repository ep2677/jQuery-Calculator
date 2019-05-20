$(document).ready(function() {
	
  $(".key").on("click", function() {
    var btnVal = $(this).val();
    console.log(btnVal);
    $(".screen").append(btnVal);
  });
	
  var equal = $("#equals")
  $("#equals").on("click", function() {
    var answer = eval($(".screen").html());
    console.log(answer);
    $(".screen").html(answer);
  });
  /* Clear Screen */
  $("#clear").on("click", function() {
      $(".screen").html("");
    })
	
    /* Working on Delete key here:::*/
  $("#backspace").on("click", function() {
      var input = $.trim($(".screen").html())
      var lastChar = input[input.length - 1];
      $(".screen").html(input.slice(0, -1));
    })
    //            Operator Keys
    // Working on lastcharacter check here:
  $("#divide").on("click", function() {
    var input = $.trim($(".screen").html())
    var lastChar = input[input.length - 1];
    var str = input;
    if (lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === ".") {
      return false;
    } else {
      $(".screen").append("/");
    };
  });
  $("#plus").on("click", function() {
    var input = $.trim($(".screen").html())
    var lastChar = input[input.length - 1];
    var str = input;
    if (lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === ".") {
      return false;
    } else {
      $(".screen").append("+");
    };
  });
  $("#multiply").on("click", function() {
    var input = $.trim($(".screen").html())
    var lastChar = input[input.length - 1];
    if (lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === ".") {
      return false;
    } else {
      $(".screen").append("*");
    };
  });
  $("#minus").on("click", function() {
    var input = $.trim($(".screen").html())
    var lastChar = input[input.length - 1];
    if (lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === ".") {
      return false;
    } else {
      $(".screen").append("-");
    };
  });
  $("#decimal").on("click", function() {
    var input = $.trim($(".screen").html())
    var lastChar = input[input.length - 1];
    if (lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === ".") {
      return false;
    } else {
      $(".screen").append(".");
    };
  });
  /*
  function (i,e) {
  	$(i).on("click", function(){
  		var input = $.trim($(".screen").html())
  		var lastChar = input[input.length-1];
  		if (lastChar === e) {
  			return false
  		}else {
  			$(".screen").append(e);
  		};

  	});
  };

  /*
  var operators = ["/","*","+","-","."]
  var i = 0
  var input = $.trim($(".screen").html())
  var lastChar = input[input.length-1];
  while (lastChar === operators[i]) {
  	$("#decimal").on("click", function(){
  		console.log("We getting somewehre here?")
  		i++;
  	})
  		console.log(operators[i]);
  	i++;
  */
});