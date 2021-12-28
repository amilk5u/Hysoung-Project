"use strict";
var winW;
var winH;
var esStep = "Expo.ease";
var esOut = "Expo.easeOut";
var $window = $(window);
var winSc = $(window).scrollTop();
var $header = $("#header");
var $html = $("html");
var controller = null;

//navigation controls
var $gnb = $("#gnb"),
    $lnb = $("#lnb"),
    $navBtn = $lnb.find(".btn_nav"),
    $searchBtn = $(".btn_search"),
    $search = $("#search"),
    $searchCloseBtn = $(".btn_close_search");
    // $closeBtn = $(".btn_close")
    // $menu = $("#menu");

var $tabMenu = $(".tab_menu"),
    $tabList = $tabMenu.find("li"),
    $tabConts = $(".tab_contents");

var $popupBtn = $(".btn_popup"),
    $popupBox = $(".popup"),
    $popupBg = $(".dimmed"),
    $closePopupBtn = $(".btn_popup_close");

$window.load(function () {
    var _this =  $(this);
    winW = _this.width();
    winH = _this.height();
    winSc = _this.scrollTop();
    $window.on("resize", function () {
        winW = _this.width();
        winH = _this.height();
    });
    _this.trigger("resize");
    $(window).scroll(function () {
        winSc = _this.scrollTop();
    });
    layout();
    main();
    about();
    carts();
    design_order();
    explore();
    member();
    my_menu();
    resources();
    search();
    support();
});
function about() {

}
function carts() {

}
function design_order() {

}
function explore() {

}
function layout() {
    //form script
    $(".form_type01 input").on({
        focus : function(){
            $(this).addClass('validField');
        },
        blur : function(){
            if($(this).val() == ""){
                $(this).removeClass('validField');
            }
        }
    });

    var $questionBtn = $(".question_btn");
    $questionBtn.click(function () {
        var _this = $(this);
        if(!_this.hasClass("active")){
            _this.addClass("active");
            TweenMax.to(_this.siblings(".question_detail"), .3, {opacity:1});
            _this.siblings(".question_detail").css({display:"block"}).focus();
        } else {
            _this.removeClass("active");
            TweenMax.to(_this.siblings(".question_detail"), .3, {display:"none", opacity:0});
        }
    });
    /*$(".question_detail").on("focusout", function(){
        console.log("A");
        $(this).hide();
    });*/

    // GNB
    $gnb.find(".menu").dbNaviTwoDepthSwap({
        motionSpeed:500,
        motionType:'slide'
    });

    // search
    $searchBtn.on("click", function(){
        $search.fadeIn();
        $search.focus();
    });
    $searchCloseBtn.on("click", function(){
        $search.fadeOut();
        $searchBtn.focus();
    });
    $searchCloseBtn.on("focusout", function(){
        $search.fadeOut();
        $searchBtn.focus();
    });

    var _seletePopup;
    // popup
    $popupBtn.on("click", function(){
        _seletePopup = $(this).data("popup");
        $("."+_seletePopup).css({"display":"flex"});
        $("."+_seletePopup).focus();
    });
    $closePopupBtn.on("click", function(){
        $(".btn_popup[data-popup="+_seletePopup+"]").focus();
        $popupBox.fadeOut();
    });
    $closePopupBtn.on("focusout", function(){
        $(".btn_popup[data-popup="+_seletePopup+"]").focus();
        $popupBox.fadeOut();
    });
    $popupBg.on("click", function(){
        $(".btn_popup[data-popup="+_seletePopup+"]").focus();
        $popupBox.fadeOut();
    });
}
function main() {
    var visualSlide = new Swiper(".main_container .visual_slide", {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".visual_next_btn",
            prevEl: ".visual_prev_btn",
        },
    });

    var retailSlide = new Swiper(".main_container .retail_slide", {
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    });

    var financialSlide = new Swiper(".main_container .financial_slide", {
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    });

    $tabList.click(function(){
        $tabList.removeClass("on");
        $tabConts.find("> div").hide();
        var activeTab = $(this).data("tab");
        $(this).addClass("on");
        $tabConts.find("."+activeTab).show();
    });

    $(".thumb_slide01 button").click(function(){
        $(".thumb_slide01 button").removeClass("active");
        $(this).addClass("active");
    });
    $(".thumb_slide02 button").click(function(){
        $(".thumb_slide02 button").removeClass("active");
        $(this).addClass("active");
    });

    var thumbSlide01 = new Swiper(".main_container .thumb_slide01", {
        slidesPerView: 6,
        // spaceBetween: 25,
        // slidesPerView: "auto",
        navigation: {
            nextEl: ".thumb_slide_next01",
            prevEl: ".thumb_slide_prev01",
        },
        observer: true,
        observeParents: true
    });
    var partsSlide01 = new Swiper(".main_container .parts_slide01", {
        slidesPerView: "auto",
        // spaceBetween: 10,
        observer: true,
        observeParents: true
    });

    var thumbSlide02 = new Swiper(".main_container .thumb_slide02", {
        slidesPerView: 6,
        // spaceBetween: 25,
        // slidesPerView: "auto",
        navigation: {
            nextEl: ".thumb_slide_next02",
            prevEl: ".thumb_slide_prev02",
        },
        observer: true,
        observeParents: true
    });
    var partsSlide02 = new Swiper(".main_container .parts_slide02", {
        slidesPerView: "auto",
        // spaceBetween: 10,
        observer: true,
        observeParents: true
    });

    var orderSlide01 = new Swiper(".financial_container .order_slide01", {
        slidesPerView: 1,
        breakpoints: {
            1024: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });
    var orderSlide02 = new Swiper(".financial_container .order_slide02", {
        slidesPerView: 1,
        breakpoints: {
            1024: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 4
            }
        }
    });
    var orderSlide03 = new Swiper(".financial_container .order_slide03", {
        slidesPerView: 1,
        breakpoints: {
            1024: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });
    var orderSlide04 = new Swiper(".financial_container .order_slide04", {
        slidesPerView: 1,
        breakpoints: {
            1024: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 4
            }
        }
    });
}
function member() {

}
function my_menu() {

}
function resources() {

}
function search() {

}
function support() {

}