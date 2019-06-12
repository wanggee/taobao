! function ($) {
    class taobao {
        constructor() {
            // this.baidu = $('.baidu');
            // this.pic_ul = $('.pic_list');
            // this.pic_li = $('.pic_list li');
            // this.btns = $('.baidu ol li');
            // this.btn_left = $('#btn_left');
            // this.btn_right = $('#btn_right');
            this.J_Promo = $('.J_Promo');
            this.pic_ul = $('.promo-bd');
            this.pic_li = $('.J_Promo .mod');
            this.btns = $('.promo-nav li');
            this.btn_left = $('.J_Prev');
            this.btn_right = $('.J_Next');

            this.num = 0; //当前点击的按钮的索引。
        }
        init() {
            let _this = this;
            //1.改变布局
            var $first = this.pic_li.first().clone(true, true);
            var $last = this.pic_li.last().clone(true, true);
            this.pic_ul.append($first);
            this.pic_ul.prepend($last);

            //2.ul赋值宽度
            this.liwidth = $('.J_Promo .mod').eq(0).width();
            this.pic_ul.width($('.J_Promo .mod').length * this.liwidth).css('left', -this.liwidth + 'px');

            //3.给所有的btns添加点击事件。
            this.btns.on('click', function () {
                _this.num = $(this).index(); //当前的索引
                _this.tabswitch();
                _this.btns.eq(_this.num).addClass('selected').siblings().removeClass('selected');
            });

            //4.显示隐藏左右的切换箭头
            this.J_Promo.hover(function () {
                $('.sld-ft-opt').show();
                $('.J_Prev').show();
                $('.J_Next').show();
            }, function () {
                $('.sld-ft-opt').hide();
                $('.J_Prev').hide();
                $('.J_Next').hide();
            });
            //5.this.btn_right添加点击事件。
            this.btn_right.on('click', function () {
                _this.rightclick();
            });

            this.btn_left.on('click', function () {
                _this.leftclick();
            });
        }

        tabswitch() {
            let _this = this;
            this.pic_ul.stop(true, true).animate({
                left: -(this.num + 1) * this.liwidth
            }, function () { //通过条件判断是否需要切换css位置。
                if (_this.num == _this.btns.length) {
                    _this.pic_ul.css('left', -(_this.liwidth) + 'px');
                    _this.num = 0;
                }

                if (_this.num == -1) {
                    _this.pic_ul.css('left', -(_this.liwidth) * _this.btns.length + 'px');
                    _this.num = _this.btns.length - 1;
                }
            });
        }


        rightclick() {
            this.num++;
            if (this.num == this.btns.length) {
                this.btns.eq(0).addClass('selected').siblings().removeClass('selected');
            } else {
                this.btns.eq(this.num).addClass('selected').siblings().removeClass('selected');
            }
            document.title = this.num;
            this.tabswitch();
        }

        leftclick() {
            this.num--;
            //this.num==-1 : 自动找到了最后一个，index():支持负数，从后往前
            this.btns.eq(this.num).addClass('selected').siblings().removeClass('selected');
            document.title = this.num;
            this.tabswitch();
        }
    }
    new taobao().init();
}(jQuery);




