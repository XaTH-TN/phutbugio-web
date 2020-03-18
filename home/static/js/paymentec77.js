var payment = {};

payment.payWithCard = function () {
    ajaxSubmit({
        service: 'coins/card',
        id: 'payment-form',
        done: function (result) {
            if (result.success) {
                console.log(result);
                popup.msg(result.msg);
                // location.reload();

            }
        }
    });
};

payment.payWithOTP = function () {
    ajaxSubmit({
        service: '/coins/pay-with-otp',
        id: 'otp-form',
        done: function (result) {
            if (result.success) {
                if(result.telco == 'Vinaphone'){
                    popup.msg('Hệ thống đang nâng cấp!');
                }else{
                    window.location = "/coins/otp?transid="+result.transid+"&requestid="+result.requestid;
                }

            }
        }
    });
};
payment.confirmOTP = function () {
    ajaxSubmit({
        service: '/coins/confirm-otp',
        id: 'otp-form',
        done: function (result) {
            if (result.success) {
                popup.msg(result.msg);
            }
        }
    });
};

payment.buyMonth = function () {
    ajax({
        service: '/coins/month',
        done: function (resp) {
            popup.msg(resp.msg);
            if(resp.success){
                location.reload();
            }
        }
    });
};
payment.buyMoreMonth = function () {
    ajax({
        service: '/coins/more-month',
        done: function (resp) {
            popup.msg(resp.msg);
            if(resp.success){
                location.reload();
            }
        }
    });
};
payment.buyMatch = function (id) {
    ajax({
        service: '/coins/match',
        data: {id: id},
        done: function (resp) {
            if(resp.success){
                location.reload();
            }else{
                popup.msg(resp.msg);
            }
        }
    });
};