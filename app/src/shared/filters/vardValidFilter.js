( function (app) {
    app.filter('yesNo', YesNo);
    function YesNo() {
        return function (boolean) {
            return boolean ? 'Valid' : 'Invalid';
        }
    }
})(window.rentalPaymentApp);



