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
                    _this.parent().parent().css({"z-index":0})
                }else {
                    $formSelectType01.attr("style","");
                }
            } else {
                _this.siblings("label").addClass("select");
                _this.parent("div").toggleClass("validField");
                if(_this.parent("div").hasClass("validField")){
                    _this.parent().parent().css({"z-index":0})
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
}