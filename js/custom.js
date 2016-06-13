$(document).ready(function(){
  $(document).foundation();
	$('.research-link').click(function(e){
	  e.preventDefault()
	  $('html, body').animate({
	    scrollTop: $("#" + this.classList[1]).offset().top - 20
	    },1000 );
	  })    
})