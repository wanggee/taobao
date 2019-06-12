(function () {
    function UrlSearch() {
        var name, value;
        var str = location.href; //取得整个地址栏
        var num = str.indexOf("?")
        str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

        var arr = str.split("&"); //各个参数放到数组里
        for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                name = arr[i].substring(0, num);
                value = arr[i].substr(num + 1);
                this[name] = value;
            }
        }
    }


    
    var Request = new UrlSearch(); //实例化--获取详情页？id给后端(前端获取地址栏参数)



    $.ajax({
        type: "post",
        url: "http://localhost/h5/projectname/php/details.php",
        data: { 'sid': Request['id'] },
        dataType: "json",
        success: function (res) {
            $('#J_Title h3').append(res[0].title);
            $('#J_StrPrice .tb-rmb-num').html(res[0].price);
            var str= `
            <li data-value="${res[0].sitid1}">
                <a href="javascript:void(0);">
                    <span>${res[0].sit1}</span>
                </a>
                <i>已选中</i>
            </li>
            <li data-value="${res[0].sitid2}">
                <a href="javascript:void(0);">
                    <span>${res[0].sit2}</span>
                </a>
                <i>已选中</i>
            </li>
            <li data-value="${res[0].sitid3}">
                <a href="javascript:void(0);">
                    <span>${res[0].sit3}</span>
                </a>
                <i>已选中</i>
            </li>
            `;
            $('#sit').html(str);


        }
    });

})();