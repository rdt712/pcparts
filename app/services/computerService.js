(function() {
    'use strict';

    angular
        .module('pcParts')
        .service('computerService', ComputerService);

    ComputerService.$inject = [
        '$resource'
    ];

    /* @ngInject */
    function ComputerService(
        $resource
    ) {
        var computerService = this;

        computerService.getComputers = getComputers;
        computerService.getComputerById = getComputerById;

        ////////////////

        function getComputers() {
            var remoteComputerService = $resource('/api/computer/');
            return remoteComputerService.get().$promise;
        }

        function getComputerById(id) {
            var remoteAccountService = $resource("api/computer/:id", {
                id: '@id'
            });
            return remoteComputerService.get({
                id: id
            }).$promise;
        }
    }
})();
