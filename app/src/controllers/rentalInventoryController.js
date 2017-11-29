(function (app) {
    app.controller('RentalInventoryController', RentalInventoryController);
    RentalInventoryController.$inject = ['RentalPaymentService','$http','$state'];

    function RentalInventoryController (RentalPaymentService, $http, $state) {
        var vm = this;

        RentalPaymentService.getInventoryData().then(function(res){
            vm.rentalData = res;
        });
        vm.selectRental = function(data){
            RentalPaymentService.setSelectedInventoryData(data);
            $state.go('payment');
        }
    }
})(window.rentalPaymentApp);
