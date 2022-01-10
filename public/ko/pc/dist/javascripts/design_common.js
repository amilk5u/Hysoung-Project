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
    $navBtn = $(".btn_nav"),
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
    var swiper = new Swiper(".product_slide_contain", {
        pagination: {
            el: ".detail_img .indicator",
            clickable: true,
        },
        navigation: {
            nextEl: ".product_slide_contain .next_btn",
            prevEl: ".product_slide_contain .prev_btn",
        },
    });

    function productViewFix () {
        // 제품 상세 페이지
        const $productDetailType = $(".product_detail_type"),
            $viewDetail = $productDetailType.find(".view_detail"),
            $productTopMenu = $productDetailType.find(".product_top_menu"),
            $substanceCont = $productDetailType.find(".substance_cont"),
            $optionBar = $productDetailType.find("#optionBar");

        let _substanceContH =  $substanceCont.outerHeight(),
            _viewTopMenuFix = $viewDetail.outerHeight() - $productTopMenu.outerHeight(),
            _priceFooterFix = ($html.outerHeight() - $("footer").outerHeight()) - winH;

        // 옵션 바 높이 값 조절
        $optionBar.css("height", _substanceContH);

        // view fixed
        if ( winSc > _viewTopMenuFix ) {
            $productDetailType.addClass("view_active");
            $productDetailType.addClass("option_active");
        } else {
            $productDetailType.removeClass("view_active");
            $productDetailType.removeClass("option_active");
        }
        // price fixed
        if ( winSc > _priceFooterFix ) {
            $productDetailType.addClass("price_active");
        } else {
            $productDetailType.removeClass("price_active");
        }
    }

    // 제품 수량 컨트롤
    function productQuantity() {
        let _quantityN = 0;
        const $increaseControlBtn = $(".increase_control_btn"),
            $controlDownBtn = $increaseControlBtn.find(".down_btn"),
            $controlUpBtn = $increaseControlBtn.find(".up_btn"),
            $quantityInput = $increaseControlBtn.find(".quantity_input");

        $controlDownBtn.on("click", function () {
            _quantityN = Number($quantityInput.val());
            if(!$(this).find("button").hasClass("btn_popup")){
                _quantityN = _quantityN - 1;
                if ( _quantityN < 0 ) {
                    _quantityN = 0;
                }
                $quantityInput.val(_quantityN);
            }
        });
        $controlUpBtn.on("click", function () {
            _quantityN = Number($quantityInput.val());
            if(!$(this).find("button").hasClass("btn_popup")){
                _quantityN = _quantityN + 1;
                $quantityInput.val(_quantityN);
            }
        });
    }

    $window.scroll(function(){
        productViewFix();
    });
    $window.resize(function(){
        productViewFix();
    });
    productViewFix();
    productQuantity();

    // 모바일 전용 가격 folding bar
    $("#ProductPriceBar .total_price .option_txt").on("click",function(){
        let _this = $(this);
        if (!_this.hasClass("on")) {
            $(".dim").addClass("on");
            _this.addClass("on");
            $("#ProductPriceBar").addClass("active");
        } else {
            $(".dim").removeClass("on");
            _this.removeClass("on");
            $("#ProductPriceBar").removeClass("active");
        }
    });

    $(".dim").on("click",function(){
        $(".dim").removeClass("on");
        $("#ProductPriceBar .total_price .option_txt").removeClass("on");
        $("#ProductPriceBar").removeClass("active");
    });
}
function explore() {
    //product_list_type01
    var $productListType01 = $(".product_list_type01");

    //swiper
    var $introSlide = $productListType01.find(".intro_slide");
    var introslide = new Swiper($introSlide, {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView:4
            },
            320: {
                slidesPerView:"auto"
            }
        }
    });
    var $similarSlide = $productListType01.find(".similar_slide");
    var similarslide = new Swiper($similarSlide, {
        slidesPerView:"auto"
    });
    var $relatedSlide = $productListType01.find(".related_slide");
    var relatedslide = new Swiper($relatedSlide, {
        slidesPerView:"auto"
    });

    // click, scroll event
    var $orderBox = $productListType01.find(".order_box");
    var $productBtn = $orderBox.find(".product_btn");
    var $productList = $productBtn.find("button");
    var $selectViewMo = $orderBox.find(".select_view_mo");
    var headerH = $header.height();
    var orderBoxH = $orderBox.height();
    var offsetScrollAmt = headerH + orderBoxH;
    //scroll 값 가져오기
    var $productArea = $productListType01.find("[class$=_area]");
    var productArr = [];
    $productArea.each(function (){
        productArr.push($(this).offset().top - offsetScrollAmt);
    });
    // menu click event
    $productList.each(function (i){
        $(this).click(function (){
            $productList.removeClass("on");
            $(this).addClass("on");
            TweenMax.to($html,.3,{scrollTop:$productArea.eq(i).offset().top - offsetScrollAmt});

            var _txt = $(this).text();
            if(winW <= 1024){
                $productName.removeClass("active");
                $productBtn.slideUp(300);
                $selectViewMo.css("display","inline-block").html("<p>"+_txt+"</p>");
            }
        });
    });
    // scroll event
    $($window).on("mousewheel DOMMouseScroll", function (e){
        if(winSc < productArr[0]-100) {
            $productList.removeClass("on");
            if(e.originalEvent.deltaY < 0){
                $selectViewMo.css("display","none");
            }
        }
        if(winSc >= productArr[0]-100 && winSc <= productArr[1]){
            $productList.removeClass("on");
            $productList.eq(0).addClass("on");
            if(winW <= 1024){
                $selectViewMo.html("<p>"+$productList.eq(0).text()+"</p>");
            }
        }
        if(winSc >= productArr[1]-100 && winSc <= productArr[2]){
            $productList.removeClass("on");
            $productList.eq(1).addClass("on");
            if(winW <= 1024){
                $selectViewMo.html("<p>"+$productList.eq(1).text()+"</p>");
            }
        }
        if(winSc >= productArr[2]-100 && winSc <= productArr[3]){
            $productList.removeClass("on");
            $productList.eq(2).addClass("on");
            if(winW <= 1024){
                $selectViewMo.html("<p>"+$productList.eq(2).text()+"</p>");
            }
        }
        if(winSc >= productArr[3]-100){
            $productList.removeClass("on");
            $productList.eq(3).addClass("on");
            if(winW <= 1024){
                $selectViewMo.html("<p>"+$productList.eq(3).text()+"</p>");
            }
        }
    });

    //mobile menu click event
    var $productName = $productListType01.find(".product_name > p:nth-of-type(2)");
    $productName.click(function (){
        if(winW <= 1024){
            $(this).toggleClass("active");
            if($(this).hasClass("active")){
                $productBtn.slideDown(300).css("display","inline-block");
                $productList.parent("li").css("display","block");
                $selectViewMo.css("display","none");
            }
            else {
                $productBtn.slideUp(300);
                if($selectViewMo.val().trim()){
                    $selectViewMo.css("display","inline-block");
                }
            }
        }
    });

    // 제품 설명 더 보기 (desktop)
    const $content = $(".content"),
        $moreBtn = $content.find(".more_btn");

    $moreBtn.on("click",function(){
        let _this = $(this);
        _this.parents(".row_list").find(".last_txt p").addClass("more_active");
        _this.css("display","none");
    });


    // 제품 설명 토글 버튼 (mobile)
    function modelToggle () {
        const $foldingM = $(".folding_m"),
              $modelTitle = $foldingM.find(".last_txt span");

        $modelTitle.on("click",function(){
            let _this = $(this),
                $models = _this.parents(".last_txt"),
                $openTxt = _this.parents(".last_txt").find("p");
            let openHeight = $openTxt.outerHeight(true) + $models.outerHeight();

            if ($models.hasClass("on")) {
                TweenMax.to($models, .3, {height: 2 + "rem"});
                $models.removeClass("on")
            } else {
                $models.addClass("on")
                TweenMax.to($models, .3, {height: openHeight});
            }
        });
    }
    modelToggle();


}
function layout() {
    //form script
    $(".form_text_type01 input").on({
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

    var $formSelectType01 = $(".form_select_type01"),
        $formSelectInput = $formSelectType01.find("input"),
        $formSelectBtn = $formSelectType01.find("button");

    $formSelectInput.on({
        click : function (){
            var _this = $(this);
            console.log(_this);

            $formSelectType01.css({"z-index":-1});
            if (_this.val().trim() === ""){
                _this.parent("div").toggleClass("validField");
                if(_this.parent("div").hasClass("validField")){
                    _this.parent().parent().css({"z-index":1})
                }else {
                    $formSelectType01.attr("style","");
                }
            } else {
                _this.siblings("label").addClass("select");
                _this.parent("div").toggleClass("validField");
                if(_this.parent("div").hasClass("validField")){
                    _this.parent().parent().css({"z-index":1})
                }else {
                    $formSelectType01.attr("style","");
                }
            }
        }
    });
    $formSelectBtn.click(function(){
        var _selectTxt = $(this).text();
        var $selectInput = $(this).parent("li").parent("ul").siblings("input");
        var $selectLabel = $(this).parent("li").parent("ul").siblings("label");
        $selectInput.val(_selectTxt);
        $selectInput.parent("div").removeClass("validField");
        $selectLabel.addClass("select");
        $formSelectType01.attr("style","");
    });

    $(".form_textarea_type01 textarea").on({
        focus : function(){
            $(this).addClass('validField');
        },
        blur : function(){
            if($(this).val() == ""){
                $(this).removeClass('validField');
            }
        }
    });


    // GNB
    $gnb.find(".menu").dbNaviTwoDepthSwap({
        motionSpeed:500,
        motionType:'none'
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

    // Mobile Nav
    $navBtn.click(function(){
       $(this).toggleClass("active");
       $(".mobile_menu").toggleClass("active");
    });

    // myMenu
    $(".btn_myMenu").click(function(){
        $(this).toggleClass("active");
        $(".my_menu_list").toggleClass("active");
    });
    
    // dropMenu
    $(".snb_s > a").on('click',function(e){
        $(".snb_s > a").removeClass('on');
        $(".snb_s > ul").slideUp();
        $(this).removeClass('on');
        var menuList = $(this).next('ul');
        var link = $(this).attr('href');
        if(!menuList.is(':visible') ){
            if(link == '#'){
                $(this).addClass('on');
                menuList.slideDown();
            }else{
                window.location.href = link;
            }
        }
        e.preventDefault();
    });

    $(window).resize(function(){
        var width = window.innerWidth;
        $(".footer_link>li>a").off('click');
        if (width<1024) {
            $(".footer_link>li>a").on('click', function(e){
                $(".footer_link>li>a").removeClass("on");
                e.preventDefault();
                $(".footer_link>li>ul").slideUp();
                $(this).removeClass("on");
                var submenu = $(this).next("ul");
                if( submenu.is(":visible") ){
                }else{
                    $(this).addClass("on");
                    submenu.slideDown();
                }
                return false;
            });
        } else if (width>= 1024) {
            $(".footer_link>li>a").off('click');
        }
    }).resize();

    // Filters
    var $filters = $("#filters"),
        $filterBtn = $(".btn_filter")
    $filterBtn.click(function(){
        $filters.toggleClass("fold_aside");
    });

    $(".filter_type02 > ul li").click(function(e){
        $(".filter_type02 > ul li").removeClass("active");
        $(".filter_type02 .product_cont").hide();

        var _this = $(this),
            _idx = _this.index();
        $(this).addClass("active");
        $(".filter_type02 .product_cont").eq(_idx).show();
        e.preventDefault();
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


    // header 공통 부분 높이값 유동적으로 변경
    function controlWrapAction() {
        const $contTitle = $(".cont_title");
        const $searchBtnM = $(".search_btn_m");
        const $searchCloseBtn = $(".search_close_btn");
        const $content = $(".content");
        const $btnFilter = $(".btn_filter");
        const $btnApply = $(".btn_apply");
        const $selectedFilter = $(".selected_filter");

        $searchBtnM.on("click",function(){
            let _this = $(this);
            _this.addClass("search_on");
            $contTitle.addClass("search_on");
            $btnFilter.addClass("height_change_on")
            fixedH();
        });

        $searchCloseBtn.on("click",function(){
            $contTitle.removeClass("search_on");
            $btnFilter.removeClass("height_change_on")
            fixedH();
        });

        function fixedH () {
            let contTitleH = $contTitle.height();
            let headerH = $("header").height() + $(".sub_title_wrap").height();
            $content.css("marginTop",headerH + contTitleH);
        }
        $window.on("resize",fixedH);

        $btnApply.on("click",function(){
            $selectedFilter.addClass("selected_filter_on");
            fixedH();
        });
    }
    controlWrapAction();





































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
            1200: {
                slidesPerView: 4
            }
        }
    });

    var financialSlide = new Swiper(".main_container .financial_slide", {
        slidesPerView: 1,
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
function member() {

}
function my_menu() {
    var orderSlide01_mypage = new Swiper(".mypage_container .order_slide01", {
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
    var orderSlide02_mypage = new Swiper(".mypage_container .order_slide02", {
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
    var orderSlide03_mypage = new Swiper(".mypage_container .order_slide03", {
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
    var orderSlide04_mypage = new Swiper(".mypage_container .order_slide04", {
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
    var orderSlide05_mypage = new Swiper(".mypage_container .order_slide05", {
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
function resources() {

    function faqFocusActiveMotion () {
        const $faqListWrap = $(".faq_list_wrap"),
              $Folding = $faqListWrap.find(".snb_s");

        $Folding.on("click",function(){
            let _this = $(this);
            let thisFaqListWrap = _this.parents(".faq_list_wrap");
            $faqListWrap.removeClass("active");
            if ( $Folding.find("a").hasClass("on") ) {
                thisFaqListWrap.addClass("active");
            } else {
                thisFaqListWrap.removeClass("active");
            }
        });
    }
    faqFocusActiveMotion();
}
function search() {

}
function support() {

}