$(document).ready(function() {
  var e = $("#filter-products :selected").val();

  $("#filter-products").change(function() {
    var selected = $("#filter-products :selected").val();
    if (selected === "all") {
      $(".rockin, .companion, .pro, .ez-play").css("display", "block");
      //   $(".companion").css("display", "inherit");
      //   $(".pro").css("display", "inherit");
      //   $(".ez-play").css("display", "inherit");
    } else if (selected === "ez-play") {
      $(".rockin, .companion, .pro").css("display", "none");
      //   $(".companion").css("display", "none");
      //   $(".pro").css("display", "none");

      $(".ez-play").css("display", "block");
    } else if (selected === "rockin") {
      $(".ez-play, .companion, .pro").css("display", "none");
      //   $(".companion").css("display", "none");
      //   $(".pro").css("display", "none");

      $(".rockin").css("display", "block");
    } else if (selected === "companion") {
      $(".rockin, ez-play, .pro").css("display", "none");
      //   $(".ez-play").css("display", "none");
      //   $(".pro").css("display", "none");

      $(".companion").css("display", "block");
    } else if (selected === "pro") {
      $(".rockin, .companion, .ez-play").css("display", "none");
      $(".pro").css("block");
    }
  });
});
