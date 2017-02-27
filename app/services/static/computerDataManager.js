(function() {
    'use strict';

    angular
        .module('pcParts')
        .service('computerDataManager', ComputerDataManager);

    ComputerDataManager.$inject = [
        '$sessionStorage'
    ];

    /* @ngInject */
    function ComputerDataManager(
        $sessionStorage
    ) {

        var computerDataManager = this;

        computerDataManager.computer = null;
        computerDataManager.setComputer = setComputer;

        activate();

        /////////////////

        function activate() {
            computerDataManager.computer = $sessionStorage.computer;
        }

        function setComputer(computer) {
            computerDataManager.computer = computer;
            $sessionStorage.computer = computer;
        }
    }
})();
