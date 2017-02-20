
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

      // Store link tabs in variable $tabs
  var $tabs = $("#myNavbar ul li,.myLinkBtn");

    // Add click event to the tabs
  $tabs.on("click", function(){

     // Find which tab is clicked and store in variable $clickedTab
    var $clickedTab = $(this).attr("rel");

    // Remove the active class from the present tab
    $tabs.removeClass("active");

    // Add the active class to the clicked tab
    $("li[rel =" + $clickedTab + "]").addClass("active");

    // Remove activePage class from the present page and fade-it-out
    // (500) specifies the number of milliseconds it takes to fadeOut
    $("main .activePage").removeClass("activePage").fadeOut(500, function(){

      // Fade-in the new Page according to the tab clicked
      // (700) specifies the number of milliseconds it takes to fadeIn
      $("div#"+ $clickedTab).fadeIn(700, function(){

        // Add activePage class to this new page
        $(this).addClass("activePage");
      });
    });
  });

  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
});

