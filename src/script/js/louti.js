
!function ($) {
    var $loutinav = $('#loutinav');
    var $navlis = $('#loutinav li');
    var $louceng = $('.louceng');
    // 当滚动条事件top值大于x时，楼层导航显示
    $(window).on('scroll', function () {
        var $top = $(window).scrollTop();
        if ($top >= 750) {
            $loutinav.show();
        } else if ($top < 750) {
            $loutinav.hide();
        }
    });

    //nav点击为active，其他消失
    $navlis.not('.last').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        //点击nav，跳到对应的楼层
        var $top = $louceng.eq($(this).index()).offset().top;
        $('html').animate({
            scrollTop: $top
        });
    });

    //返回顶部
    $('.last').on('click',function(){
        $('html').animate({
            scrollTop: 0
        });
    })



}(jQuery);