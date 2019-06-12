!function ($) {

    var $password = $("input[name=pwd]");
    var $J_PwdTip = $('#J_PwdTip');
    var $J_MsgPassword = $('#J_MsgPassword');
    var $repassword = $('.form-item #J_RePassword');
    var $J_MsgRePassword = $('#J_MsgRePassword');
    var $J_Nick = $('#J_Nick');
    var $J_MsgNick = $('#J_MsgNick');
    var $J_MsgNick2 = $('#J_MsgNick2');
    var $pw_strength_1 = $('.pw-strength-1');
    var $pw_strength_2 = $('.pw-strength-2');
    var $pw_strength_3 = $('.pw-strength-3');
    var $level = $('.pw-strength-bar em');
    var $tips1 = $('#tips1');
    var $tips2 = $('#tips2');
    var $tips3 = $('#tips3');
    var $img1 = $('#tips1 img');
    var $img2 = $('#tips2 img');
    var $img3 = $('#tips3 img');

    // 设置登陆密码获取焦点时
    $password.on("focus", function () {
        $J_MsgPassword.css({
            "display": "none"
        });
        $J_PwdTip.css({
            "display": "block",
            "position": "absolute",
            "left": 500,
            "top": 65
        });
    });
    // 设置登陆密码失去焦点时
    $password.on("blur", function () {
        $J_MsgPassword.css({
            "display": "block"
        });
        $J_PwdTip.css({
            "display": "none"
        });
    });
    //登陆密码发生改变时
    $password.on('keyup', function () {
        if ($password.val().length < 6 || $password.val().length > 20) {
            $J_MsgPassword.css({
                "display": "block"
            });
        };
        // //如果length为0
        if ($password.val().length == 0) {
            $pw_strength_1.css({
                "background-color": "#dcdcdc"
            });
            $pw_strength_2.css({
                "background-color": "#dcdcdc"
            });
            $pw_strength_3.css({
                "background-color": "#dcdcdc"
            });
            $level.html('');
        }
        // 只要length>0;tips2前为√
        // if ($password.val().length > 0) {
        //     $tips2.$img2.attr(
        //         "src","img/right.png"

        // )
        // }
        // 弱,如果length大于0小于5；
        if ($password.val().length > 0 && $password.val().length < 5) {
            $pw_strength_1.css({
                "background-color": "red"
            });
            $level.html('弱');
        }
        //中
        if ($password.val().length >= 5) {
            $pw_strength_2.css({
                "background-color": "red"
            });
            $level.html('中');
        }
        //强
        var reg = '/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{7,20}$/';
        // var reg='(?!^[a-z]*$)(?!^[A-Z]*$)(?!^[0-9]*$)(?!^[_\W]*$)^[a-zA-Z0-9].{6,20}$';
        //     // var reg=new RegExp('/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{15,20}$/');
        //     // var reg1= patt1=new RegExp("/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{15,20}$/");
        var val = $password.val();
        if (reg.test(val) && $password.val().length > 12) {
            console.log(1);
            $pw_strength_3.css({
                "background-color": "red"
            })
        }

    });

    // 密码确认获取焦点时
    $repassword.on('focus', function () {
        $J_MsgRePassword.css({
            "display": "block",
        });
    });

    // 密码确认失去焦点时
    $repassword.on('blur', function () {
        $J_MsgRePassword.css({
            "display": "none",
        });
    });

    //设置会员名--J_Nick
    $J_Nick.on('focus', function () {
        $J_MsgNick2.css({
            "display": "block",
        });
        $J_MsgNick.css({
            "display": "none",
        });
    });
    $J_Nick.on('blur', function () {
        $J_MsgNick2.css({
            "display": "none",
        });
        $J_MsgNick.css({
            "display": "block",
        });
    });

    // 提交时

}(jQuery)
