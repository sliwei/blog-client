/**
 *  Plugin Name: scrollfix
 *  Plugin URL: https://github.com/sliwei/scrollfix
 *  Version: 1.0
 *  Author: awei
 *  Author URL: https://github.com/sliwei
 *  License: Licensed under MIT
 **/

(function ($) {
  'use strict';

  $.fn.scrollfix = function (opt) {

    var elem = this;
    var win = $(window);

    //Extended Options
    var options = $.extend({
      endPos: 0, // 定位底部距离(如果是字符串类型则是jq参数)
      distanceTop: 0, // 定位时，距离顶部安全距离
      safe: 20, // 定位时，距离底部安全距离
    }, opt);

    var toBottom = options.endPos;

    if (typeof toBottom === 'string') {
      toBottom = parseFloat($(document).height() - $(options.endPos).offset().top);
    }

    var elemTop = 0;
    var elemWidth = 0;

    var getWidth = function () {
      elemWidth = elem.parent().width();
      elemTop = elem.offset().top
    };

    var setCss = function () {
      var scrolling = win.scrollTop();
      if (scrolling > (elemTop - options.distanceTop)) {

        var scrollTop = $(window).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(window).height();

        if (scrollTop + elem.height() + toBottom + options.distanceTop + options.safe + 10 >= scrollHeight) {
          elem.css({
            width: elemWidth,
            position: 'fixed',
            bottom: scrollTop + windowHeight + toBottom + options.safe - scrollHeight,
            top: 'initial',
          })
        } else {
          elem.css({
            width: elemWidth,
            position: 'fixed',
            bottom: 'initial',
            top: options.distanceTop,
          })
        }
      } else {
        elem.css({
          position: 'static',
          width: 'auto'
        })
      }
    };

    getWidth();

    win.on("scroll", function () {
      setCss();
    });

    win.on("resize", function () {
      getWidth();
      setCss();
    });

  };
}(jQuery));
