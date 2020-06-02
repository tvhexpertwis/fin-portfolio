$(document).ready(function() {
  $('#main-nav li a').on('click',function(e) {
  	e.preventDefault();
    
    
    	var hash = this.hash;
      console.log(hash)
	  
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	 }, 1000); 
   window.location.hash = hash
    
  
    
  });
});

