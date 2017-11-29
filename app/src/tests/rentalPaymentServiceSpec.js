describe('rentalPaymentService', function () {
    var rentalPaymentService, httpBackend, http, data={
        "_id": "1",
        "index": 0,
        "rental": {
            "daily": "$80",
            "weekly": "$1,600",
            "monthly": "$3,333"
        },
        "picture": "assets/images/chevy_malibu.jpg",
        "description": "Adipisicing aliqua amet proident ipsum deserunt velit do reprehenderit culpa dolore veniam.Duis sunt tempor exercitation eu do sunt deserunt consectetur.Culpa aliqua deserunt adipisicing tempor quis dolore do consequat ea proident velit. Occaecat occaecat non commodo sit culpa ipsum ea commodo eu voluptate nulla pariatur duis. Mollit elit qui incididunt culpa dolor. Ullamco aliquip elit mollit nulla.\r\n",
        "make": "MINI",
        "model": "MNX-1"
    };
    beforeEach(function () {
        module('rentalPaymentApp');

        // $httpBackend will be a mock.
        inject(function (RentalPaymentService, _$httpBackend_, _$http_) {
            rentalPaymentService = RentalPaymentService;
            httpBackend = _$httpBackend_;
            http = _$http_;
        });
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe("RentalPaymentService Service:", function() {

        it('should contain a searchService',function() {
            expect(rentalPaymentService).not.toEqual(null);
        });

        it('should call getInventoryData ',function() {
            httpBackend.whenGET("assets/data/inventory.json").respond(data);
            rentalPaymentService.getInventoryData().then(function(res) {
                expect(res).toEqual(data);
            });
            httpBackend.flush();
        });

        it('should call setSelectedInventoryData',function(){
            spyOn(rentalPaymentService, 'setSelectedInventoryData');
            rentalPaymentService.setSelectedInventoryData(data);
            expect(rentalPaymentService.setSelectedInventoryData).toHaveBeenCalled();
        });

        it('should call getSelectedInventoryData',function(){
            spyOn(rentalPaymentService, 'getSelectedInventoryData');
            rentalPaymentService.getSelectedInventoryData();
            expect(rentalPaymentService.getSelectedInventoryData).toHaveBeenCalled();
        });

    });



});