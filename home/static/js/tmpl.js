(function () {
    this.tmpl = function (template, data) {
        return new EJS({url: baseUrl + template + '?v=11'}).render(data);
    };
})();