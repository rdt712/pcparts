(function() {
    'use strict';

    angular
        .module('pcParts')
        .service('accountService', AccountService);

    AccountService.$inject = [
        '$resource'
    ];

    /* @ngInject */
    function AccountService(
        $resource
    ) {
        var accountService = this;

        accountService.getAccountById = getAccountById;

        ////////////////

        // function getAccounts() {
        //     var remoteAccountService = $resource('/api/account/');
        //     return remoteAccountService.get().$promise;
        // }

        function getAccountById(id) {
            var remoteAccountService = $resource("api/account/:id", {
                id: '@id'
            });
            return remoteAccountService.get({
                id: id
            }).$promise;
        }
    }
})();
