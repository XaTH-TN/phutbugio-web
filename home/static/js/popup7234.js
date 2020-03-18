(function () {

    function Popup() {
        this.open = function (id, title, content, cmd, type) {
            if ($('#' + id).length > 0) {
                $('#' + id).remove();
            }
            if (type === '') {
                type = '';
            }

            $('body:first').append('<div aria-hidden="true" class="modal fade" id="' + id + '">\
                <div class="modal-dialog ' + type + '">\
                    <div class="modal-content" style="color: #000;">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                            ' + (title === null || title === '' ? '' : '<h4 class="modal-title">' + title + '</h4>') + '\
                        </div>\
                        <div class="modal-body">' + content + '</div>\
                        <div class="modal-footer"></div>\
                    </div>\
                </div>\
            </div>');
            $('#' + id + ' .close').click(function () {
                popup.close(id);
            });

            if (cmd) {
                for (var i = 0; i < cmd.length; i++) {
                    $('#' + id + ' .modal-footer').append('<button type="button" class="btn ' + cmd[i].style + '" id="' + 'popup-cmd-' + id + '-' + i + '">' + cmd[i].title + '</button>');
                    $('#' + 'popup-cmd-' + id + '-' + i).click(cmd[i].fn);
                }
            }

            var option = {};
            //option.backdrop = 'static';
            $('#' + id).modal(option);

            $('body').keydown(function (e) {
                if (e.keyCode === 27) {
                    popup.close(id);
                }
            });
        };

        this.openCustom = function (id, content) {
            if ($('#' + id).length > 0) {
                $('#' + id).remove();
            }


            $('body:first').append('<div aria-hidden="true" class="modal fade modal-mupmip" id="' + id + '">\
                <div class="vertical-alignment-helper">\
                    <div class="modal-dialog vertical-align-center">\
                    <div class="modal-dialog ">\
                        <div class="modal-content">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                        </div>\
                            <div class="modal-body">' + content + '</div>\
                        </div>\
                    </div>\
                    </div>\
                </div>\
            </div>');

            var option = {};
            // option.backdrop = 'static';
            // option.keyboard = false;
            $('#' + id).modal(option);

            $('body').keydown(function (e) {
                if (e.keyCode === 27) {
                    window.location = "/";
                }
            });
            $('#' + id).on('hidden.bs.modal', function (e) {
                window.location = "/";
            })
        };

        this.openCustom2 = function (id, title, content) {
            if ($('#' + id).length > 0) {
                $('#' + id).remove();
            }

            $('body:first').append('<div aria-hidden="true" class="modal fade modal-mupmip" id="' + id + '">\
                <div class="vertical-alignment-helper">\
                    <div class="modal-dialog vertical-align-center">\
                    <div class="modal-dialog ">\
                        <div class="modal-content">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                            ' + (title === null || title === '' ? '' : '<h3 class="modal-title text-bold text-center">' + title + '</h3>') + '\
                        </div>\
                            <div class="modal-body">' + content + '</div>\
                        </div>\
                    </div>\
                    </div>\
                </div>\
            </div>');

            var option = {};
            $('#' + id).modal(option);

            $('body').keydown(function (e) {
                if (e.keyCode === 27) {
                    window.location = "/";
                }
            });
        };
        this.close = function (id) {
            $('#' + id).modal('hide');
        };


        this.msg = function (msg, fn) {
            this.open('popup-msg', 'Thông báo', '<div style="min-width: 300px">' + msg + '</div>', [{
                    title: "Đồng ý",
                    style: "btn-primary",
                    fn: function () {
                        if (fn) {
                            fn();
                        }
                        popup.close('popup-msg');
                    }
                }]);
        };

        this.confirm = function (msg, fn) {
            this.open('popup-confirm', 'Xác nhận', '<div class="container" style="min-width: 300px">' + msg + '</div>', [{
                    title: "Đồng ý",
                    style: "btn-primary",
                    fn: function () {
                        fn();
                        popup.close('popup-confirm');
                    }
                }, {
                    title: 'Từ chối',
                    fn: function () {
                        popup.close('popup-confirm');
                    }
                }]);
        };
    }

    function Loading() {
        this.show = function () {
            if ($('#loading').length > 0) {
                $('#loading').remove();
            }
            if ($('#loading').length <= 0) {
                $('body:first').append('<div class="modal fade" id="loading" tabindex="-1" role="dialog" aria-labelledby="loading"> <div class="modal-dialog modal-sm" role="document"> <div class="modal-content"> <div class="modal-body"> <div class="loading"><div class="icon ion-load-a refresh-animate"></div><h5>Đang tiến hành</h5> </div></div></div></div></div>');
                var option = {};
                $('#loading' ).modal(option);
            }
        };
        this.hide = function () {
            $('#loading' ).modal('hide');
        };

    }

    this.loading = new Loading();
    this.popup = new Popup();

})();