$(document).ready(function () {
  $(".mobile-menu").click(function () {
    $(".stick").toggleClass(function () {
      return $(this).is(".open, .close") ? "open close" : "open";
    });
  });
});
