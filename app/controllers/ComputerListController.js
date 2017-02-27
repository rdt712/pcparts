(function() {
    'use strict';

    angular
        .module('pcParts')
        .controller('ComputerListController', ComputerListController);

    ComputerListController.$inject = [
        '$state',
        'computerDataManager',
        'computerService'
    ];

    /* @ngInject */
    function ComputerListController(
        $state,
        computerDataManager,
        computerService
    ) {
        var computerListController = this;

        computerListController.computers = null;
        computerListController.searchText = "";

        computerListController.goToDetail = goToDetail;

        activate();

        ////////////////

        function activate() {
            computerService.getComputers().then(function(result) {
                console.log(result);
                computerListController.computers = result.computers;
            });
        }

        function goToDetail(computer) {
            computerDataManager.setComputer(computer);
            $state.go('computerDetail');
        }
    }
})();
