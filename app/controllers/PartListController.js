(function() {
    'use strict';

    angular
        .module('pcParts')
        .controller('PartListController', PartListController);

    PartListController.$inject = [
        '$state',
        'partDataManager',
        'partService'
    ];

    /* @ngInject */
    function PartListController(
        $state,
        partDataManager,
        partService
    ) {
        var partListController = this;

        partListController.parts = null;
        partListController.searchText = "";

        partListController.goToDetail = goToDetail;

        activate();

        ////////////////

        function activate() {
            partService.getParts().then(function(result) {
                console.log(result);
                partListController.parts = result.parts;
            });
        }

        function goToDetail(part) {
            partDataManager.setPart(part);
            $state.go('partDetail');
        }
    }
})();
