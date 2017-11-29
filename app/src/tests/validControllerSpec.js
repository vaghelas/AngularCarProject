'use strict';

describe('ValidController test suite', function() {

        var $scope, vm, modalInstance = { close: function() {}, dismiss: function() {}};

        beforeEach(module('rentalPaymentApp'));

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            modalInstance = {                    // Create a mock object using spies
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss')
            };
            vm = $controller('ValidController', {
                $scope: $scope,
                $uibModalInstance: modalInstance,
                isValid: true,
                cardType: 'visa'
            });
        }));
        describe('ValidController', function() {

            it('should instantiate the controller properly', function () {
                expect(vm).not.toBeUndefined();
            });

            it('valid controller variables intitialized', function(){
                expect(vm.isValid).toBeTruthy();
                expect(vm.cardType).toBe('visa');
            });

            it('should close the modal with result "true" when accepted', function () {
                spyOn(vm, 'ok');
                vm.ok();
                modalInstance.close(true);
                expect(modalInstance.close).toHaveBeenCalledWith(true);
            });

        });
});
