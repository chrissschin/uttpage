$(document).ready(function(){
  $.ajax({
		url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=235641580.ac75f97.4a90c7cf418944b09ef6bbb3b76926c2",
    dataType: "jsonp",

  })
  .done(function(results){
    console.log(results)
  })







});
