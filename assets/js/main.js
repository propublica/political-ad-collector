// by xX_mAdDy_VaRnEr_Xx

var chromeLink = "https://chrome.google.com/webstore/detail/facebook-political-ad-col/enliecaalhkhhihcmnbjfmmjkljlcinl";
var firefoxLink = "https://addons.mozilla.org/en-US/firefox/addon/facebook-ad-collector/";

function switcher() { 
  if(navigator.userAgent.indexOf("Chrome") != -1 ) {
    console.log("chrome");
      $('body').removeClass().addClass('chrome');
      $('#big-download').text('Download For Chrome');
      $('#big-download').attr('href', chromeLink);
      $('.chrome').show();
      $('.firefox').hide();
  } else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
      $('body').removeClass().addClass('firefox');
      $('#big-download').text('Download For Firefox');
      $('#big-download').attr('href', firefoxLink);
      $('#firefox').prependTo('#instructions');
      $('.firefox').show();
      $('.chrome').hide();
  } else {
     $('#big-download').hide();
  }
}

$( document ).ready(function() {
  console.log('yep');
  switcher();

  $('.switch').on('click', function(event) {
    console.log('attempt');
    if ($('body').hasClass('chrome')) {
      $('body').removeClass().addClass('firefox');
    } else {
      $('body').removeClass().addClass('chrome');
    }
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });


  // code snippet for fixing link header
  var wrap = $("#wrap");

  wrap.on("scroll", function(e) {
      
    if (this.scrollTop > 147) {
      wrap.addClass("fix-search");
    } else {
      wrap.removeClass("fix-search");
    }
    
  });
});