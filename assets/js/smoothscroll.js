// Smooth-scrolling script for browsers that do not support the
// CSS ``scroll-behavior`` property. https://caniuse.com/#feat=css-scroll-behavior

$(document).ready(function() {
  $("a.fa-arrow").on("click", function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    $("html, body").animate(
      {
        scrollTop: hash
      },
      800,
      function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  });
});
