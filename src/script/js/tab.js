!function ($) {
    var $title = $('.notice-hd li');
    var $pics = $('.notice-bd ul');
  
    $title.on('mouseover', function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $pics.eq($(this).index()).show().siblings('ul').hide();
        $(this).eq($(this).index(0)).css({
            "text-decoration":"none"
                })
        $(this).css({
            "text-decoration":"block"
             
                });
     
    })

}(jQuery);