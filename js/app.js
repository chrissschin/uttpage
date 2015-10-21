$(document).ready(function(){
  $.ajax({
		url: "https://api.instagram.com/v1/users/28552958/media/recent/?access_token=235641580.ac75f97.4a90c7cf418944b09ef6bbb3b76926c2",
    dataType: "jsonp",

  })
  .done(function(results){
    console.log(results.data);
    $.each(results.data, function(index, value){
      $('.ig-container').append('<div class="box"><img class="pic" src=" '+ value.images.standard_resolution.url + '" alt=""><div id="overlay" class="pic overlay"><p class="caption">'+ value.caption.text +'</p></div></div>');

    });
});

  //hover over picture and it shows caption
  $("body").on("mouseenter", ".box", function(event){
    console.log("entered");
    console.log(event);
    $(".overlay").fadeIn();
  })
  $("body").on("mouseleave", ".box", function(){
    console.log("left");
    $(".overlay").fadeOut();
  })

  //hover of box
  //box appears with caption in middle


//shoots pictures to screen

//   //on click of insta-user
//   $("body").on("click", ".insta-user", function(event){
//     //assign userId the value.id from data-userid
//     var userId = $(event.currentTarget).data('userid');
//     $.ajax({
//       url: "https://api.instagram.com/v1/users/"+ userId +"/media/recent/?access_token=235641580.ac75f97.4a90c7cf418944b09ef6bbb3b76926c2",
//       dataType: "jsonp",
//
//     })
//     .done(function(results){
//       //'<div class="box"><a href="#"><img class="pic" src="'+ results.data.profile_picture + '" alt=""><h4>data.username <br><small>data.full_name</small></h4></a></div>'
//       console.log(results.data);
//       $('.ig-container').html('')
//       $.each(results.data, function(index, value){
//         $('.ig-container').append('<div class="box"><img class="pic" src="'+ value.images.standard_resolution.url + '" alt=""></div>')
//       })
//   });
// })


//28552958




});
