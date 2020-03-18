'use strict';

window.AwesomeScript = function () {
    var _this = {};

    _this.init = function () {
        _this.initPlaylist();
        _this.initOrientation();
    };
    _this.getClass = function(type) {
        switch (type) {
            case 'landscape':
            case 'landscape-secondary':
            case 'landscape-primary':
                return 'landscape';
            case 'portrait':
            case 'portrait-secondary':
            case 'portrait-primary':
                return 'portrait';
            default:
                return '';
        }
    }

    _this.updateOrientation = function() {
        if (screen.orientation) {
            const type = screen.orientation.type;
            $('body').removeClass('landscape portrait').addClass(_this.getClass(type));
        }
    }

    _this.initOrientation = function() {
        _this.updateOrientation();

        window.addEventListener("orientationchange", function() {
            _this.updateOrientation();
        }, false);
    };

    _this.initPlaylist = function() {
        var $container = $('#js-list-channel');
        new Swiper($container, {
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true
        });

    }

    _this.utils = {
        isMobile: function isMobile(agent) {
            return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent || window.navigator.userAgent)
            );
        }
    };

    _this.fixIE = function () {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document.createElement('style');
            msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
            document.querySelector('head').appendChild(msViewportStyle);
        }
    };

    return _this;
}();

$('document').ready(function () {
    window.AwesomeScript.init();
    $(document).on('click', '#chat-f-b', function (event) {
        event.preventDefault();
        $('#f-chat-conent').toggleClass('show');
    });
    $(document).on('click', '#chat_f_close', function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('#f-chat-conent').removeClass('show');
    });
});