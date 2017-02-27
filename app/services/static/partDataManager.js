(function() {
    'use strict';

    angular
        .module('pcParts')
        .service('partDataManager', PartDataManager);

    PartDataManager.$inject = [
        '$sessionStorage'
    ];

    /* @ngInject */
    function PartDataManager(
        $sessionStorage
    ) {

        var partDataManager = this;

        partDataManager.part = null;
        partDataManager.setPart = setPart;

        activate();

        /////////////////

        function activate() {
            partDataManager.part = $sessionStorage.part;
        }

        function setPart(part) {
            partDataManager.part = part;
            $sessionStorage.part = part;
        }
    }
})();
