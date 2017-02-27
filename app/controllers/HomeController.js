(function() {
    'use strict';

    angular
        .module('pcParts')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        '$state',
        'accountService'
    ];

    /* @ngInject */
    function HomeController(
        $state,
        accountService
    ) {
        var homeController = this;

        homeController.account = null;

        activate();

        ////////////////

        function activate() {
            accountService.getAccountById(1).then(function(result) {
                console.log(result);
                homeController.account = result;
            });
        }
    }
})();
