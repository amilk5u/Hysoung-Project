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