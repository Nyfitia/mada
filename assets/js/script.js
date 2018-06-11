window.onload = function() {
    $(".sec-images-soirees").hide();
    $(".sec-images-mada").hide();
    $(".the1").hide();
    $(".the2").hide();
}

$(function () {
    $(".categorie-images-1").click(function() {
        $(".sec-images-soirees").show();
        $(".sec-images-mada").hide();
        $(".the1").show();
        $(".the2").hide();
    });

    $(".categorie-images-2").click(function() {
        $(".sec-images-soirees").hide();
        $(".sec-images-mada").show();
        $(".the1").hide();
        $(".the2").show();
    });
});