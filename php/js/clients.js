$(function() {
  "use strict";
  var wind = $(window);
  // scrollIt
  $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -80            // offste (in px) for fixed top navigation
  });

  // navbar scrolling background
  wind.on("scroll",function () {

      var bodyScroll = wind.scrollTop(),
          navbar = $(".navbar"),
          navbloglogo = $(".blog-nav .logo> img"),
          logo = $(".navbar .logo> img");

      if(bodyScroll > 100){

          navbar.addClass("nav-scroll");
          // logo.attr('src', 'img/logo-dark.png');

      }else{

          navbar.removeClass("nav-scroll");
          logo.attr('src', 'img/logo.svg');
          // navbloglogo.attr('src', 'img/logo-dark.png');
      }
  });

  // close navbar-collapse when a  clicked
  $(".navbar-nav a").on('click', function () {
      $(".navbar-collapse").removeClass("show");
  });


  // sections background image from data background
  var pageSection = $(".bg-img, section");
  pageSection.each(function(indx){

      if ($(this).attr("data-background")){
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
  });


  // === owl-carousel === //

  // Team owlCarousel
  $('.team .owl-carousel').owlCarousel({
      loop:true,
      margin: 30,
      mouseDrag:false,
      autoplay:true,
      smartSpeed:500,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          700:{
              items:2
          },
          1000:{
              items:4
          }
      }
  });

  // clients owlCarousel
  $('.clients .owl-carousel').owlCarousel({
      loop:true,
      mouseDrag:true,
      autoplay:true,
      autoplayTimeout: 3000,
      smartSpeed: 1500,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          700:{
              items:2
          },
          1000:{
              items:4
          }
      }
  });

  $('.portfolio-container .owl-carousel').owlCarousel({
      items:1,
      loop:true,
      // margin: 30,
      mouseDrag:true,
      autoplay:true,
      smartSpeed:500,
      nav:true,


  });

  // magnificPopup
  $('.gallery').magnificPopup({
      delegate: '.popimg',
      type: 'image',
      gallery: {
          enabled: true
      }
  });

  $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
          beforeOpen: function() {
              if($(window).width() < 700) {
                  this.st.focus = false;
              } else {
                  this.st.focus = '#name';
              }
          }
      }
  });
  // YouTubePopUp
  $("a.vid, .gallery__item__video").YouTubePopUp();
});


// === window When Loading === //

$(window).on("load",function (){
  var wind = $(window);

  // isotope
  $('.gallery').isotope({
      // options
      itemSelector: '.gallery__item'
  });

  var $gallery = $('.gallery').isotope({
      // options
  });

  // filter items on button click
  $('.filtering').on( 'click', 'span', function() {

      var filterValue = $(this).attr('data-filter');

      $gallery.isotope({ filter: filterValue });

  });

  $('.filtering').on( 'click', 'span', function() {

      $(this).addClass('active').siblings().removeClass('active');

  });
});



// Google Maps
if($(".map-canvas").length>0){
  setTimeout(function(){
      initializeMap();
  }, 500 );
}

// Google Map
function initializeMap() {
  var myCenter=new google.maps.LatLng(50.255656, 28.658959)
  var image = 'img/location-marker.png';
  var marker=new google.maps.Marker({
      position:myCenter,
      title: 'Beemloop office',
      icon: image,
  });

  var mapProp = {
      center:myCenter,
      zoom: 5,
      draggable: true,
      scrollwheel: false,
      disableDefaultUI: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var contentString = '<div><b>Beemloop office</b><br> Kievskaia st. 1, Zhytomyr, Ukraine</div>';
  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
  map.panBy(-150,80); // (x,y)
  marker.setMap(map);

  google.maps.event.addListener(marker, 'click', function() {

      infowindow.setContent(contentString);
      infowindow.open(map, marker);

  });
}

$(function() {
  $('.lazy').lazy();
});




$(window).on('focus', function () {
  $('.owl-next').trigger('click');
});
