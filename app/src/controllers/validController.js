(function (app) {
    app.controller('ValidController', ValidController);
    ValidController.$inject = ['$uibModalInstance','isValid', 'cardType'];
    function ValidController ($uibModalInstance, isValid, cardType) {
        var vm = this;
        vm.isValid = isValid;
        vm.cardType = cardType;
        vm.ok = function () {
            $uibModalInstance.close();
        };
    }
})(window.rentalPaymentApp);

