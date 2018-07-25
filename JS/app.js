// The code below is to show/hide the hamburger menu 

$(document).ready(function() {
    $(".cross").hide();
    $(".nav").hide();
    $(".hamburger").click(function() {
        $(".nav").slideToggle("fast", function() {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });
    
    $(".cross").click(function() {
        $(".nav").slideToggle("fast", function() {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });
})



//Devan helped me with this section - I am fetching photos from Flickr, from my own personal Flickr feed, and displaying it as a slidehow on my homepage

function loadPictures(){
	var slideshow=$("#box").val();
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags="+slideshow+"&tagmode=any&format=json&jsoncallback=?",
	function(slideshow){

        //Using dot notation in the lines below to simplify calling a whole bunch of functions to get the slideshow feature
        $("#images").hide().html(slideshow).fadeIn("fast"),$.each(slideshow.items,function(slideshow,e){$("<img/>").attr("src",e.media.m).appendTo("#images")})})
	}