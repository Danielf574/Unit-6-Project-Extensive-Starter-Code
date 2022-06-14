//reference code
$("").click(function(){
$("").show();
});

//yes code

$(".yes-button").click(function() {
	$(".part-two-yes-text").text("Your journey begins...double click the map to continue");
    $(".part-two-yes-text").show();
    $(".yes-button").hide();
	$(".no-button").hide();
	$(".intro-text").hide();
});

$(".firstImage").dblclick(function(){
    $(".firstImage").hide();
	$(".part-two-yes-text").show();
	$(".part-two-yes-text").text("The map leads to the top of a mountain, will you take the path thats alredy built or look for possible equipment");
	$(".yes-mountain-img").show();
	$(".yes-button2").show();
	$(".no-button2").show();
    $(".yes-button2").css("height","40px");
	$(".no-button2").css("height","40px");
	$(".yes-mountain-img").css("width","45%");

});

$(".yes-button2").click(function(){
    $(".part-two-yes-text").text("you found equipment and climbed the mountain and arrived to the chest, click the chest to open it");
	$(".part-two-yes-text").show();
	$(".yes-treasure-img1").fadeIn();
	$(".yes-mountain-img").hide();
	$(".yes-button2").hide();
	$(".no-button2").hide();
});

$(".no-button2").click(function(){
    $(".part-two-yes-text").text("You've found a brigde that seems like it can hold on, you decide to run it but unfortunately fell");
	$(".yes-bridge-img").show();
    $(".yes-mountain-img").hide();
	$(".yes-button2").hide();
	$(".no-button2").hide();
    $(".yes-bridge-img").css("width","35%");
	$(".reset-button").show();
	$(".reset-button").css("height","40px");

});

$(".yes-treasure-img1").click(function(){
	$(".yes-treasure-img2").slideDown();
    $(".yes-treasure-img1").hide();
	$(".part-two-yes-text").hide();
	$(".final-yes-text").show();
    $(".final-yes-text").text("you've opend the chest and found some treasure,well done ");
	$(".reset-button").show();
	$(".reset-button").css("height","40px");

});



//no code
$(".no-button").click(function() {
	$(".part-two-no-text").text("Well your loss...if you would like to see what your firends found click on the image to see");
    $(".part-two-no-text").show();
    $(".no-treasure-img1").show();
	$(".firstImage").hide();
    $(".yes-button").hide();
	$(".no-button").hide();
    $(".intro-text").hide();

});

$(".no-treasure-img1").click(function(){
    $(".no-treasure-img1").hide();
	$(".no-treasure-img2").show();
	$(".part-two-no-text").text("Your friends decided to go on the adventure and found the treasure");
	$(".reset-button").show();
	$(".reset-button").css("height","40px");

});

//reset button
$(".reset-button").click(function(){
    $(".reset-button").hide();
    $(".firstImage").show();
    $(".yes-button").show();
	$(".no-button").show();
    $(".intro-text").show();
	$(".no-treasure-img2").hide();
    $(".part-two-no-text").hide();
    $(".yes-treasure-img2").hide();
    $(".final-yes-text").hide();
    $(".yes-bridge-img").hide();
    $(".part-two-yes-text").hide();
});