(function (app) {

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'src/views/rentalInventory.html',
                controller: 'RentalInventoryController',
                controllerAs: 'vm'
            })
            .state('payment', {
                url: '/payment',
                templateUrl: 'src/views/rentalPayment.html',
                controller: 'RentalPaymentController',
                controllerAs: 'vm'
            });

    });


})(window.rentalPaymentApp);