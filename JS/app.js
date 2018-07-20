$(function() {
	
	$.getJSON()
	
	var flickrApiUrl = "https://api.flickr.com/services/feeds/activity.gne?jsoncallback=?";
	
	let userID = "144539637@N03";
	
	
	$.getJSON(flickrApiUrl, {
		user_id: userID,
		format: "json"
	}).done(function(data){
		console.log(data);
		$.each(data.items, function(index, value) {
			console.log(item);
			$("<img>").attr("src", item.media.m).appendTo("#flickr");
		})
	}).fail(function(){
		alert("Ajax call failed.");
	});
	
	
});







//(function($){
//	
//	$.fn.jqFlick = function(options){
//		
//		options = $.extend({
//			width:500,
//			height:500,
//			maxFetch:50,
//			captions:false,
//			autoAdvance:false,
//			advancePeriod:5000,
//			apiKey:'d45fe83f3cd3ff5d8a6c445a3040fdfd'
//		},options);
//		
//		var YQL = 'http://query.yahooapis.com/v1/public/yql?q={QUERY}&format=json&callback=?',
//		query = "SELECT * FROM flickr.photosets.photos({MAX}) WHERE photoset_id='{PHOTOSET}'"+" AND api_key='{KEY}'";
//	}
//	
//})
//
//
//
//
//
//
//$(document).ready(function(){
//	
//	var apiKey = 'd45fe83f3cd3ff5d8a6c445a3040fdfd';
//	
//	$('#flickrslideshow').jqFlick({
//		photosetID: '3V8483',
//		width:500,
//		height:320,
//		autoAdvance:true,
//		apiKey:apiKey
//	});
//});