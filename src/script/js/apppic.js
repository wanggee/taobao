(function () {
    $.ajax({
        type: "post",
        url: "http://localhost/h5/projectname/php/postapp.php",
        dataType: "json",
        success: function (res) {
            var str = "";
            str += "<ul  class='apps-nav clearfix'>";
            $.each(res, function (i, val) {
                str += "<li class='nav'><a href=' " + val.apphref + " '><img src=' " + val.apppic + " '+ alt='手机app - 淘宝' class='app-icon'></a></li>";
            });
            str += "</ul>";
            $('.J_Apps').append(str);
        }
    });
})();