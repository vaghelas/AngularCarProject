(function (app) {
    app.controller('RentalPaymentController', RentalPaymentController);
    RentalPaymentController.$inject = ['RentalPaymentService','$http','$state','$uibModal'];

    function RentalPaymentController (RentalPaymentService, $http, $state,$uibModal) {
        var vm = this, modalInstance;
        vm.selectedInventoryData = RentalPaymentService.getSelectedInventoryData();

        vm.pay = function(paymentForm){
            modalInstance = $uibModal.open({
                templateUrl: 'src/views/valid.html',
                controller: 'ValidController',
                controllerAs: 'vm',
                size: 'sm',
                resolve: {
                    isValid: function () {
                        return paymentForm.creditCard.$valid;
                    },
                    cardType: function() {
                        return paymentForm.creditCard.$ccType;
                    }
                }
            });
        };



    }
})(window.rentalPaymentApp);

