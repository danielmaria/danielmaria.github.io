var introHelloEN = "HI, MY NAME IS DANIEL & I AM A";
var introIAmOneEN = "SOFTWARE DEVELOPER";
var introIAmTwoEN = "CURIOUS PERSON";
var introIAmThreeEN = "STUDENT";
var btnPTEN = "Portuguese";
var btnENEN = "English";

var introHelloPT = "OI, MEU NOME É DANIEL & EU SOU";
var introIAmOnePT = "DESENVOLVEDOR DE SOFTWARE";
var introIAmTwoPT = "CURIOSO";
var introIAmThreePT = "ESTUDANTE";
var btnPTPT = "Portugês";
var btnENPT = "Inglês";

(function($){
    $.fn.scrollingTo = function( opts ) {
        var defaults = {
            animationTime : 1000,
            easing : '',
            callbackBeforeTransition : function(){},
            callbackAfterTransition : function(){}
        };

        var config = $.extend( {}, defaults, opts );

        $(this).click(function(e){
            var eventVal = e;
            e.preventDefault();

            var $section = $(document).find( $(this).data('section') );
            if ( $section.length < 1 ) {
                return false;
            };

            if ( $('html, body').is(':animated') ) {
                $('html, body').stop( true, true );
            };

            var scrollPos = $section.offset().top;

            if ( $(window).scrollTop() == scrollPos ) {
                return false;
            };

            config.callbackBeforeTransition(eventVal, $section);

            $('html, body').animate({
                'scrollTop' : (scrollPos+'px' )
            }, config.animationTime, config.easing, function(){
                config.callbackAfterTransition(eventVal, $section);
            });
        });
    };
}(jQuery));



jQuery(document).ready(function(){
	"use strict";
	new WOW().init();


(function(){
 jQuery('.smooth-scroll').scrollingTo();
}());

});




$(document).ready(function(){
     $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar-brand a").css("color","#fff");
            $("#top-bar").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#top-bar").addClass("animated-header");
        }
     });

     $("#clients-logo").owlCarousel({

        itemsCustom : false,
        pagination : false,
        items : 5,
        autoplay: true,

     })
});



// fancybox
$(".fancybox").fancybox({
    padding: 0,

    openEffect : 'elastic',
    openSpeed  : 450,

    closeEffect : 'elastic',
    closeSpeed  : 350,

    closeClick : true,
    helpers : {
        title : { 
            type: 'inside' 
        },
        overlay : {
            css : {
                'background' : 'rgba(0,0,0,0.8)'
            }
        }
    }
});


$(document).ready(function(){
     $(".ptlanguage").hide();
     $("#introPresentation").text(introHelloEN);
     $("#introIAmOne").text(introIAmOneEN);
     $("#introIAmTwo").text(introIAmTwoEN);
     $("#introIAmThree").text(introIAmThreeEN);
     $("#emailtext").hide();
});

function changeLanguageBR(){
     $("#introPresentation").text(introHelloPT);
     $("#introIAmOne").text(introIAmOnePT);
     $("#introIAmTwo").text(introIAmTwoPT);
     $("#introIAmThree").text(introIAmThreePT);
     $("#btnEN").text(btnENPT);
     $("#btnPT").text(btnPTPT);

     $(".enlanguage").hide("slow");
     $(".ptlanguage").fadeIn(1000);
}

function changeLanguageEN(){
     $("#introPresentation").text(introHelloEN);
     $("#introIAmOne").text(introIAmOneEN);
     $("#introIAmTwo").text(introIAmTwoEN);
     $("#introIAmThree").text(introIAmThreeEN);
     $("#btnEN").text(btnENEN);
     $("#btnPT").text(btnPTEN);

     $(".ptlanguage").hide("slow");
     $(".enlanguage").fadeIn(1000);
}
function showOrHideEmail(){
     $("#emailtext").toggle("slow");
}