(function() {
    'use strict';

    angular
        .module('pcParts')
        .controller('PartDetailController', PartDetailController);

    PartDetailController.$inject = [
        '$stateParams',
        'partDataManager',
        'partService'
    ];

    /* @ngInject */
    function PartDetailController(
        $stateParams,
        partDataManager,
        partService
    ) {
        var partDetailController = this;

        partDetailController.part = null;

        activate();

        function activate() {
            console.log(partDataManager.part);
            partDetailController.part = partDataManager.part;
        }
    }
})();
