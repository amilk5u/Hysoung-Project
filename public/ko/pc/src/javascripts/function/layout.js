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

    $(".form_text_type01 input").each(function(){
        if($(this).val() != ""){
            $(this).addClass('validField');
        }
    })

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
                    // $formSelectType01.attr("style","");
                    $formSelectType01.css({"z-index":0});
                }
            } else {
                _this.siblings("label").addClass("select");
                _this.parent("div").toggleClass("validField");
                if(_this.parent("div").hasClass("validField")){
                    _this.parent().parent().css({"z-index":1})
                }else {
                    // $formSelectType01.attr("style","");
                    $formSelectType01.css({"z-index":0});
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
        // $formSelectType01.attr("style","");
        $formSelectType01.css({"z-index":0});
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
        TweenMax.to($("#gnb"), .3, {display:"none", opacity:0});
        TweenMax.to($(".search_bg"), .3, {display:"block", opacity:1});
        $(this).hide();
    });
    $searchCloseBtn.on("click focusout", function(){
        $search.fadeOut();
        $searchBtn.focus();
        $searchBtn.css({"display":"inline-block"});
        TweenMax.to($("#gnb"), .3, {display:"block", opacity:1});
        TweenMax.to($(".search_bg"), .3, {display:"none", opacity:0});
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
        $(".snb_s > a").removeClass("on");
        $(".snb_s > ul").slideUp();
        $(this).removeClass("on");
        var menuList = $(this).next("ul");
        var link = $(this).attr("href");
        if(!menuList.is(':visible') ){
            if(link == '#'){
                $(this).addClass("on");
                menuList.slideDown();
            }else{
                window.location.href = link;
            }
        }
        e.preventDefault();
    });

    // dropMenu
    $(".folding_menu > button").on("click",function(e){
        $(".folding_menu > button").removeClass("on");
        $(".folding_menu > .cont").slideUp();
        var cont = $(this).next("div");
        if(!cont.is(":visible") ){
            $(this).addClass("on");
            cont.slideDown();
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
        $filterBtn = $(".btn_filter"),
        $filterBtnClose = $filters.find($(".btn_close"));

    $filterBtn.click(function(){
        $filters.toggleClass("fold_aside");
        $(".hd_transformation").toggleClass("aside_on");
        $("footer").toggleClass("aside_on");
    });

    $filterBtnClose.click(function(){
        $filters.toggleClass("fold_aside");
        $(".hd_transformation").toggleClass("aside_on");
        $("footer").toggleClass("aside_on");
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
    $popupBtn.on("click", function(e){
        $popupBox.css({"display":"none"});
        _seletePopup = $(this).data("popup");
        $("."+_seletePopup).css({"display":"flex"});
        $("."+_seletePopup).focus();
        $("body,html").css({"overflow-y":"hidden"});

        var _this = $(this);
        $closePopupBtn.on("click focusout", function(){
            _this.focus();
            $popupBox.fadeOut();
            $("body,html").css({"overflow-y":"auto"});
        });
        $popupBg.on("click", function(){
            _this.focus();
            $popupBox.fadeOut();
            $("body,html").css({"overflow-y":"auto"});
        });
        e.preventDefault();
    });

    // header ?????? ?????? ????????? ??????????????? ??????
    function controlWrapAction() {
        const $contTitle = $(".cont_title");
        const $searchBtnM = $(".search_btn_m");
        const $searchCloseBtn = $(".search_close_btn");
        const $content = $(".content");
        const $btnFilter = $(".btn_filter");

        if ($("#contents").hasClass("hd_transformation")) {
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
        }
    }
    controlWrapAction();
}