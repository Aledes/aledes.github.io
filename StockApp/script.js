/* global angular */
(function () {
    'use strict';
    angular.module("myApp", []);

    angular.module("myApp").filter('percentage', ['$filter', function ($filter) {
        return function (input, decimals) {
            return $filter('number')(input * 100, decimals) + '%';
        };
}]);
})();
