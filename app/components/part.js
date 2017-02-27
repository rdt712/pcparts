(function() {
    'use strict';

    angular
        .module('pcParts')
        .directive('pcPart', pcPart);

    pcPart.$inject = [];

    /* @ngInject */
    function pcPart() {
        var directive = {
            restrict: 'E',
            scope: {
                part: "="
            },
            templateUrl: "app/components/part.html"
        };
        return directive;
    }

})();
