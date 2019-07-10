  $(document).ready(function(){


    $('.carousel').slick({
        slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 5000,
       dots: true,
       arrows:true,
       prevArrow:'<button type="button" class="slick-prev"></button>',
       nextArrow:'<button type="button" class="slick-next"></button>'
       });
         $('.carousel').click(function() {
         $slideshow.slick('slickNext');
    });
  });




  $(function () {
    $(".more").slice(0, 1).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".more:hidden").slice(0, 1).slideDown();
        if ($(".more:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});




  // $( document ).ready(function () {
  //   $(".more").slice(0, 3).show();
  //     if ($(".blogBox:hidden").length != 0) {
  //       $("#loadMore").show();
  //     }   
  //     $("#loadMore").on('click', function (e) {
  //       e.preventDefault();
  //       $(".more:hidden").slice(0, 6).slideDown();
  //       if ($(".more:hidden").length == 0) {
  //         $("#loadMore").fadeOut('slow');
  //       }
  //     });
  //   });






//   $(document).ready(function () {
//     size_li = $("#more").size();
//     x=3;
//     $('#more:lt('+x+')').show();
//     $('#loadMore').click(function () {
//         x= (x+1 <= size_div) ? x+1 : size_div;
//         $('#more:lt('+x+')').show();
//     });
   
// });

//   $(document).ready(function() {
//     $(".Project li").click(function () {
//         $(".Project li").removeClass("active");
//         $(this).addClass("active");        
//       var showClass = this.id;
//       // $('.proImg').addClass('hidden');
  
//       if( showClass == 'all'){
//         $('.proImg').removeClass('hidden');
//       }else{
//         $('.proImg.'+showClass).removeClass('hidden');
//       } 
      
//     });
//   });

//   $(function () {
//     $(".more").slice(0, 1).show();
//     $("#loadMore").on('click', function (e) {
//         e.preventDefault();
//         $(".more:hidden").slice(0, 1).slideDown();
//         if ($(".more:hidden").length == 0) {
//             $("#load").fadeOut('slow');
//         }
//         $('html,body').animate({
//             scrollTop: $(this).offset().top
//         }, 1500);
//     });
// });