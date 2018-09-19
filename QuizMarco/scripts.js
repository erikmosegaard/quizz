$(".circle_center").click(function () {
    $(this).css("transform", "rotate(180deg)");
    $(".circle_center").fadeOut(2000);
    //$("#text_top").fadeOut(2000);
    $("#buffer_top").css("background-color", "transparent")
    $("#bottom_element").css("border", "none")
    $("#bottom_element").css("background-color", "transparent")
    $("#antwortenwrap").fadeIn(3000);
    //$("#bottom_element").fadeOut(2000);
    $(".frage").fadeIn(3000);
    $(".antworten").fadeIn(4000);
});

$("#antworteins").click(function (){
    $("#antwortzwei").fadeOut(1000);
    $("#antwortdrei").fadeOut(1000);
    $("#antworteins").fadeOut(1000);
    $(".frage").fadeOut(500);
    $(".fragezwei").fadeIn(1000);
    $(".antwortenzwei").fadeIn(1000);


})

$("#antwortzwei").click(function (){
    $("#antworteins").fadeOut(1000);
    $("#antwortdrei").fadeOut(1000);
})

$("#antwortdrei").click(function (){
    $("#antworteins").fadeOut(1000);
    $("#antwortzwei").fadeOut(1000);
})