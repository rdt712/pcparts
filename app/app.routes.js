(function() {
    'use strict';
    angular
        .module('pcParts')
        .config(router);
    router.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];
    /* @ngInject */
    function router(
        $stateProvider,
        $urlRouterProvider
    ) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/pages/home.html',
                controller: 'HomeController',
                controllerAs: 'homeController'
            }).state('partList', {
                url: '/partList',
                templateUrl: 'app/pages/partList.html',
                controller: 'PartListController',
                controllerAs: 'partListController'
            }).state('partDetail', {
                url: '/partDetail',
                templateUrl: 'app/pages/partDetail.html',
                controller: 'PartDetailController',
                controllerAs: 'partDetailController'
            }).state('computerList', {
                url: '/computerList',
                templateUrl: 'app/pages/computerList.html',
                controller: 'ComputerListController',
                controllerAs: 'computerListController'
            }).state('computerDetail', {
                url: '/computerDetail',
                templateUrl: 'app/pages/computerDetail.html',
                controller: 'ComputerDetailController',
                controllerAs: 'computerDetailController'
            });
    }
})();
