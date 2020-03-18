(function () {

    this.ajax = function (params) {
        params.loading = (typeof params.loading !== 'undefined' && !params.loading) ? false : true;
        if (params.contentType === 'json') {
            params.data = JSON.stringify(params.data);
        }

        params = $.extend({
            url: baseUrl + params.service,
            dataType: 'json',
            success: function (result) {
                if (params.loading)
                    loading.hide();
                params.done(result);
            },
            error: function () {
                if (params.loading) {
                    loading.hide();
                    popup.msg('Lỗi hệ thống, xin thử lại sau!');
                }
            }
        }, params);
        if (params.loading)
            loading.show();
        setTimeout(function () {
            $.ajax(params);
        }, 300);
    };

    this.ajaxSubmit = function (params) {
        var data = {};
        $('#' + params.id).find('input, select, textarea').each(function () {
            if ($(this).attr('type') === 'checkbox') {
                if ($(this).is(':checked')) {
                    data[$(this).attr('name')] = 1;
                } else {
                    data[$(this).attr('name')] = 0;
                }
            } else if ($(this).attr('type') === 'radio') {
                if ($(this).is(':checked')) {
                    data[$(this).attr('name')] = $(this).val();
                }
            }
            else {
                if (typeof $(this).attr('name') != 'undefined') {
                    data[$(this).attr('name')] = $(this).val();
                }
            }
        });
        para = $.extend({
            success: function (result) {
                loading.hide();
                params.done(result);
                if (!result.success) {
                    if (result.data) {
                        $('#' + params.id + ' input,#' + params.id + ' select,#' + params.id + ' textarea ,#' + params.id + ' div[for]').each(function () {
                            $(this).parents('.form-group').removeClass('has-error');
                            $(this).next('.help-block').remove();
                            if ($(this).attr('for') && result.data[$(this).attr('for')]) {
                                $(this).parents('.form-group').addClass('has-error');
                                $(this).after('<span class="help-block text-danger">' + result.data[$(this).attr('for')] + '</span>');
                            }
                        });
                    }
                    if (result.message) {
                        popup.msg(result.message);
                    }
                }
            },
            service: params.service,
            type: 'post',
            data: data,
        }, params);
        ajax(para);
    };

})();