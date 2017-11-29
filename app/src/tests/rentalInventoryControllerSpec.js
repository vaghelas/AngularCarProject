describe('RentalInventoryController', function() {
        var $scope, rentalPaymentService,$q, deferred,vm, $rootScope,state,
            data = {
                "_id": "594d8924cee1694e400bac2e",
                "index": 0,
                "rental": {
                    "daily": "$90.97",
                    "weekly": "$1,627.64",
                    "monthly": "$3,523.82"
                },
                "picture": "https://placeimg.com/75/75/tech",
                "description": "Adipisicing aliqua",
                "make": "ISOLOGIX",
                "model": "CTX-92-B"
            };
        beforeEach(function(){
            module('rentalPaymentApp');
            inject(function($rootScope, $controller, RentalPaymentService, _$q_, _$state_) {
                $scope = $rootScope.$new();
                $rootScope = $rootScope;
                $q = _$q_;
                state = _$state_;
                // We use the $q service to create a mock instance of defer
                deferred = _$q_.defer();

                // Use a Jasmine Spy to return the deferred promise
                spyOn(RentalPaymentService, 'getInventoryData').and.returnValue(deferred.promise);

                rentalPaymentService = RentalPaymentService;
                vm = $controller('RentalInventoryController', {
                    $scope: $scope,
                    rentalPaymentService: RentalPaymentService
                });
            })
        });

        it('should call RentalPaymentService', function () {
            expect(rentalPaymentService).toBeDefined();
            expect(rentalPaymentService.getInventoryData).toHaveBeenCalled();
        });

        it('should test receive the fulfilled promise', function() {
            deferred.resolve(data); //  always resolved, you can do it from your spec
            $scope.$digest();       // Check for state on success.
            expect(vm.rentalData.make).toBe('ISOLOGIX');
        });

        it('should call selectRental function',function(){
            spyOn(state, 'go');
            spyOn(rentalPaymentService, 'setSelectedInventoryData').and.returnValue(data);
            vm.selectRental(data);
            expect(state.go).toHaveBeenCalledWith('payment');
            expect(rentalPaymentService.setSelectedInventoryData).toHaveBeenCalledWith(data);
        });
    });