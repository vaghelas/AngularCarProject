'use strict';

describe('RentalPaymentController test suite', function() {
    var vm,deferred, $scope, rentalPaymentService,$q;
    var data={
        "_id": "594d8924cee1694e400bac2e",
        "index": 0,
        "rental": {
            "daily": "$90.97",
            "weekly": "$1,627.64",
            "monthly": "$3,523.82"
        },
        "picture": "https://placeimg.com/75/75/tech",
        "description": "Adipisicing aliqua amet proident ipsum deserunt velit do reprehenderit culpa dolore veniam.Duis sunt tempor exercitation eu do sunt deserunt consectetur.Culpa aliqua deserunt adipisicing tempor quis dolore do consequat ea proident velit. Occaecat occaecat non commodo sit culpa ipsum ea commodo eu voluptate nulla pariatur duis. Mollit elit qui incididunt culpa dolor. Ullamco aliquip elit mollit nulla.\r\n",
        "make": "ISOLOGIX",
        "model": "CTX-92-B"
    };
    beforeEach(module('rentalPaymentApp'));
    beforeEach(inject(function($rootScope, $controller, RentalPaymentService, _$q_, $uibModal) {
        $scope = $rootScope.$new();
        rentalPaymentService = RentalPaymentService;
        $q = _$q_;
        deferred = $q.defer();
        spyOn(rentalPaymentService, 'getSelectedInventoryData').and.returnValue(deferred.promise);

        vm = $controller('RentalPaymentController', {
            $scope: $scope,
            rentalPaymentService:rentalPaymentService
        });

    }));

    describe('Inialize RentalPaymentController', function() {

        it('should call RentalPaymentService with getSelectedInventoryData', function () {
            expect(rentalPaymentService).toBeDefined();
            expect(rentalPaymentService.getSelectedInventoryData).toHaveBeenCalled();
        });

        it('should call RentalPaymentService with selectedInventoryData', function () {
            expect(vm.selectedInventoryData).toBeDefined();
            vm.selectedInventoryData=data;
            expect(vm.selectedInventoryData).toBe(data);
        });

        it('Credit card validation',function(){
            var paymentForm = {creditCard:{$valid: true}};
            spyOn(vm, 'pay');
            vm.pay(paymentForm);
            expect(vm.pay).toHaveBeenCalledWith(paymentForm);
        });

        it('Credit card  type validation',function(){
            spyOn(vm, 'pay');
            var paymentForm= {creditCard:{$ccType: 'visa'}};
            vm.pay(paymentForm);
            expect(vm.pay).toHaveBeenCalledWith(paymentForm);
        });
    });
});

