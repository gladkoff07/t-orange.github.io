$(document).ready(function(){function e(){window.matchMedia("(min-width: 1170px)").matches&&$(window).scroll(function(){350<$(window).scrollTop()?($(".header-img").addClass("header-img_fade"),$(".header").removeClass("header_fix"),$(".header").addClass("header_home-auto-h"),$(".header-img__inner").addClass("header-img__inner_rel")):($(".header-img").removeClass("header-img_fade"),$(".header").addClass("header_fix"),$(".header").removeClass("header_home-auto-h"),$(".header-img__inner").removeClass("header-img__inner_rel"))})}function i(){window.matchMedia("(max-width: 767px)").matches?($(".header").find(".header-img ").insertAfter(".header-info .page-header"),$(".description-game__info-text").insertAfter(".description-game .list-advantages")):($(".header-info").find(".header-img").insertAfter(".header .header-info"),$(".description-game__info-text").insertAfter(".description-game__info .description-game__info-header"))}e(),window.addEventListener("resize",e),i(),window.addEventListener("resize",i);var a=$(".list-advantages"),d=$(".list-video");function r(e,i){$(window).on("load resize",function(){if(!(767<$(window).width()))return e.hasClass("slick-initialized")?void 0:e.slick(i);e.hasClass("slick-initialized")&&e.slick("unslick")})}r(a,{mobileFirst:!0,arrows:!1,dots:!0,infinite:!1,slidesToShow:1,slidesToScroll:1}),r(d,{mobileFirst:!0,arrows:!1,dots:!0,infinite:!1,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:480,settings:{slidesToShow:1}}]}),$(function(){$(".list-video__youtube").each(function(){$(this).css("background-image","url(http://i.ytimg.com/vi/"+this.id+"/sddefault.jpg)"),$(this).append($("<div/>",{class:"play"})),$(document).delegate("#"+this.id,"click",function(){var e="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1";$(this).data("params")&&(e+="&"+$(this).data("params"));var i=$("<iframe/>",{frameborder:"0",src:e,width:$(this).width(),height:$(this).height()});$(this).replaceWith(i)})})})}),$(window).on("load",function(){$preloader=$(".preloader"),$loader=$preloader.find(".preloader__img"),$loader.fadeOut(),$preloader.delay(350).fadeOut("slow"),$("body").removeClass("body_fixed")});