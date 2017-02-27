(function() {
    'use strict';

    angular
        .module('pcParts')
        .directive('pcComputer', pcComputer);

    pcComputer.$inject = [];

    /* @ngInject */
    function pcComputer() {
        var directive = {
            restrict: 'E',
            scope: {
                computer: "="
            },
            templateUrl: "app/components/computer.html"
        };
        return directive;
    }

})();
