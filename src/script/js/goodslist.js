(function () {
    $.ajax({
        type: "post",
        url: "http://localhost/h5/projectname/php/postdata.php",
        dataType: "json",
        success: function (res) {
            var str = "";
            str += "<ul  class='hotsale-loading'>";
            $.each(res, function (i, val) {
                str+="<a href='http://localhost/h5/projectname/src/details.html'><li class='shell-i'><div class='shell-img'><img src='"+val.picture+"' /></div><div class='shell-subtext'>"+val.title+"</div><div class='shell-price'>￥"+val.price+"</div></li></a>";
            });
            str += "</ul>";
            $('.tbh-hotsale').html(str);
        }
    });
})();