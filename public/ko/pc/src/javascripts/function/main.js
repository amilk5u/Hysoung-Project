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

    var $detailBtn = $(".btn_detail");
    $detailBtn.click(function () {
        var _this = $(this);
        if(!_this.hasClass("hide_option")){
            _this.addClass("hide_option");
            TweenMax.to(_this.parent().next(".details").find(".options"), .3, {opacity:0});
            _this.text("Show Option");
            _this.siblings(".options").css({display:"block"}).focus();
        } else {
            _this.removeClass("hide_option");
            _this.text("Show image");
            TweenMax.to(_this.parent().next(".details").find(".options"), .3, {opacity:1});
        }
    });

    /*
    $detailBtn.click(function(){
        var _detail = $(this).parent().next(".details");
        $(this).toggleClass("options");
        if($(this).hasClass("options")){
            $(this).text("Show Option");
            _detail.find(".options").fadeOut();
        }else{
            $(this).text("Show image");
            _detail.find(".options").fadeIn();
        }
    });*/
}