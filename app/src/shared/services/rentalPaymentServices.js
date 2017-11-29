
( function (app) {
    app.service('RentalPaymentService', RentalPaymentService);

    RentalPaymentService.$inject = ['$http','$q'];

    function RentalPaymentService($http, $q) {
        var service = this;
        service.selectedInventoryData = {};
        service.getInventoryData = getInventoryData;
        service.getSelectedInventoryData = getSelectedInventoryData;
        service.setSelectedInventoryData = setSelectedInventoryData;

        function getInventoryData() {
            var deferred = $q.defer();
            $http.get('assets/data/inventory.json').success(function(res) {
                deferred.resolve(res);
            });
            return deferred.promise;
        };

        function getSelectedInventoryData(){
            return service.selectedInventoryData;
        }

        function setSelectedInventoryData(data){
            service.selectedInventoryData = data;
        }
    }


})(window.rentalPaymentApp);



