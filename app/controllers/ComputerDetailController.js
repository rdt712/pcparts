(function() {
    'use strict';

    angular
        .module('pcParts')
        .controller('ComputerDetailController', ComputerDetailController);

    ComputerDetailController.$inject = [
        '$stateParams',
        'computerDataManager',
        'computerService'
    ];

    /* @ngInject */
    function ComputerDetailController(
        $stateParams,
        computerDataManager,
        computerService
    ) {
        var computerDetailController = this;

        computerDetailController.computer = null;

        activate();

        function activate() {
            console.log(computerDataManager.computer);
            computerDetailController.computer = computerDataManager.computer;
        }
    }
})();
