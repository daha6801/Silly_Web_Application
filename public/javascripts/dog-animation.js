
$(document).ready(function() {
   
  $( "#confused-dog" ).hover(function() {
       $( "#symbol" ).toggle( "bounce", { times: isFinite() }, "slow" );
  });
});