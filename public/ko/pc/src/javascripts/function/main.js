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
        slidesPerView: "auto",
        breakpoints: {
            1200: {
                slidesPerView: 4
            }
        }
    });

    var financialSlide = new Swiper(".main_container .financial_slide", {
        slidesPerView: "auto",
        breakpoints: {
            1200: {
                slidesPerView: 4
            }
        }
    });

    var $preferredList = $(".Preferred_list"),
        SearchedSlide = undefined;
    $(window).resize(function(){
        var width = window.innerWidth;
        if (width<=1024) {
            SearchedSlide = new Swiper(".main_container .Preferred_list", {
                slidesPerView: 1
            });

        } else if (width> 1024) {
            // SearchedSlide.destroy();
            // SearchedSlide = undefined;
            $preferredList.find($(".swiper-wrapper")).removeAttr("style");
            $preferredList.find($(".swiper-slide")).removeAttr("style");
            /*if($preferredList.hasClass("swiper-container-initialized")){
                $preferredList.removeClass("swiper-container-initialized");
                $preferredList.find(".item_list_new").removeAttr("style");
                $preferredList.find(".item").removeAttr("style");
            }*/
        }
    }).resize();

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
        slidesPerView: "auto",
        navigation: {
            nextEl: ".thumb_slide_next01",
            prevEl: ".thumb_slide_prev01",
        },
        breakpoints: {
            1200: {
                slidesPerView: 6
            }
        },
        observer: true,
        observeParents: true
    });
    var partsSlide01 = new Swiper(".main_container .parts_slide01", {
        slidesPerView: "auto",
        observer: true,
        observeParents: true
    });

    var thumbSlide02 = new Swiper(".main_container .thumb_slide02", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".thumb_slide_next02",
            prevEl: ".thumb_slide_prev02",
        },
        breakpoints: {
            1200: {
                slidesPerView: 6
            }
        },
        observer: true,
        observeParents: true
    });
    var partsSlide02 = new Swiper(".main_container .parts_slide02", {
        slidesPerView: "auto",
        observer: true,
        observeParents: true
    });

    var dashboard_dealer = new Swiper(".financial_container .dealer_dashboard", {
        pagination: {
            el: ".swiper-pagination",
        }
    });

    var orderSlide01 = new Swiper(".financial_container .order_slide01", {
        slidesPerView: "auto",
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
        slidesPerView: "auto",
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
        slidesPerView: "auto",
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
        slidesPerView: "auto",
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
}