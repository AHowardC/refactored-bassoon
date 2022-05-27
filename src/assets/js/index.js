$(document).ready(function () {
  //Click listener for cards
  $(".grid-card").on("click", function (event) {
    //get current target
    var cur_target = $(event.currentTarget);
    //get grandchild's data value attribute of current target
    var card_text_value = cur_target.first().first().attr("data-value");

    //grey out all cards
    $(".grid-card").addClass("grey");
    //except current target
    cur_target.removeClass("grey");

    //unset active to all cards
    $(".grid-card").removeClass("active");
    //set current target as active
    cur_target.addClass("active");

    //hide all contents
    $(".expanded-text").removeClass("show");
    //except current target
    $("." + card_text_value).addClass("show");
  });

  //click listener for close
  $(".close-group").on("click", function () {
    //hide all contents
    $(".expanded-text").removeClass("show");
    //color all cards
    $(".grid-card").removeClass("grey");
  });
});
