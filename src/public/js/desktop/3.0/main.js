$(document).ready(function () {
  $(".footer .main-footer002 .title-mg").click(function () {
    if ($(this).next(".body-mg").hasClass("hide")) {
      $(this).next(".body-mg").removeClass("hide");
      $(this).addClass("show-f");
    } else {
      $(this).next(".body-mg").addClass("hide");
      $(this).removeClass("show-f");
    }
  });

  $(".ct-popup select").select2({
    minimumResultsForSearch: -1,
  });
  $(".ct-popup #fprovince").select2({
    minimumResultsForSearch: 1,
  });
  $(".ct-popup #fdistrict").select2({
    minimumResultsForSearch: 1,
  });
});
function copytoclipboard(elid) {
  navigator.clipboard.writeText($("#" + elid).text());
  $(".btn-copy-cp").html("Copy");
  $(".btn" + elid).html("Copied");
}
