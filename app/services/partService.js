(function() {
    'use strict';

    angular
        .module('pcParts')
        .service('partService', PartService);

    PartService.$inject = [
        '$resource'
    ];

    /* @ngInject */
    function PartService(
        $resource
    ) {
        var partService = this;

        partService.getParts = getParts;
        partService.getPartById = getPartById;

        ////////////////

        function getParts() {
            var remotePartService = $resource('/api/part/');
            return remotePartService.get().$promise;
        }

        function getPartById(id) {
            var remoteAccountService = $resource("api/part/:id", {
                id: '@id'
            });
            return remotePartService.get({
                id: id
            }).$promise;
        }
    }
})();
