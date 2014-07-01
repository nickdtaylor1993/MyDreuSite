$(document).ready(function(){
  var h1 = $(window).height() /2;	//Gets the window's height and divides it by half.
  $('.welcome h1').css("top",h1 + "px");	//Sets the welcome message to the center of the window.
  $('.welcome h1').animate({opacity: '1'}, 6000);	//Fades in the welcome message to the screen.

  $(window).scroll(function(){								  //On window scroll makes sure to keep the menu box at a certain distance from
  	$('.menu').animate({'marginTop':window.scrollY+'px'},35); //how far the user has scrolled.

  	var position = $(window).scrollTop();
  	console.log(position);
    //$(".div").html(position);

    if(position >= 2720 && position >= 3424){
		$('.primeImage').css({opacity: '1'});
		$('.FOC-Site').css({opacity: '1'});
	}

	else if(position >= 2720 && position < 3424){
		$('.primeImage').css({opacity: '0'});
		$('.FOC-Site').css({opacity: '1'});
	}

	else{
		$('.FOC-Site').css({opacity:'0'});
		$('.primeImage').css({opacity: '0'});
	}
  });

  $('.mentor div.link').hover(	//When user hovers over to Juan Gilberts site moves icon.
  	function(){
  		$('.web-icon').addClass('hoverClass');	//Adds the hoverClass.
  		$('.web-icon').css({left:'20%'});	//Moves the icon.

  	},
  	function(){
  		$('.web-icon').removeClass('hoverClass');	//Removes the class.
  		$('.web-icon').css({left:'0%'});	//Places the icon back to its orignal place.
  	}
  );


   $('.connect div.email').hover(	//When user hovers over to Juan Gilberts site moves icon.
  	function(){
  		$('.email-icon').addClass('hoverClass');	//Adds the hoverClass.
  		$('.email-icon').css({left:'10%'});	//Moves the icon.

  	},
  	function(){
  		$('.email-icon').removeClass('hoverClass');	//Removes the class.
  		$('.email-icon').css({left:'-5%'});	//Places the icon back to its orignal place.
  	}
  );

   $('.connect div.github').hover(	//When user hovers over to Juan Gilberts site moves icon.
  	function(){
  		$('.github-icon').addClass('hoverClass');	//Adds the hoverClass.
  		$('.github-icon').css({left:'15%'});	//Moves the icon.

  	},
  	function(){
  		$('.github-icon').removeClass('hoverClass');	//Removes the class.
  		$('.github-icon').css({left:'0%'});	//Places the icon back to its orignal place.
  	}
  );






  $('.contents li:nth-child(1)').click(function(){
  	$('html, body').animate({
    	scrollTop: 1000,
    	scrollLeft: 0
	}, 1000);
  });

  $('.contents li:nth-child(2)').click(function(){
  	$('html, body').animate({
    	scrollTop: 2050,
    	scrollLeft: 0
	}, 1000);
  });

  $('.contents li:nth-child(3)').click(function(){
  	$('html, body').animate({
    	scrollTop: 2840,
    	scrollLeft: 0
	}, 1000);
  });

   $('.contents li:nth-child(4)').click(function(){
  	$('html, body').animate({
    	scrollTop: 4880,
    	scrollLeft: 0
	}, 1000);
  });

    $('.contents li:nth-child(5)').click(function(){
  	$('html, body').animate({
    	scrollTop: 7500,
    	scrollLeft: 0
	}, 1000);
  });

	$('.menu').toggleClick(
 		function(){
 			$('.contents').css({visibility: "visible"}).animate({opacity: 1}, 'slow');
  		},
  		function(){
  			$('.contents').animate({opacity: 0}, 'slow').css({visibility: "hidden"});
  		}
	);

	$('.github').click(function(){
  		var win = window.open('https://github.com/nickdtaylor1993', '_blank');
  		win.focus();
  	});

  $('.link').click(function(){
  	console.log("whats happening");
  	var win = window.open('http://www.juangilbert.com/', '_blank');
  	win.focus();
  });
});

$.fn.toggleClick = function(){
    var methods = arguments, // store the passed arguments for future reference
        count = methods.length; // cache the number of methods

    //use return this to maintain jQuery chainability
    return this.each(function(i, item){
        // for each element you bind to
        var index = 0; // create a local counter for that element
        $(item).click(function(){ // bind a click handler to that element
            return methods[index++ % count].apply(this,arguments); // that when called will apply the 'index'th method to that element
            // the index % count means that we constrain our iterator between 0 and (count-1)
        });
    });
};
