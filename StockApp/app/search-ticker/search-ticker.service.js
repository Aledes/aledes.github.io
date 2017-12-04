(function () {
    'use strict';

    angular.module('myApp')
        .service('SearchTickerService', searchTickerService);

    function searchTickerService($http) {
        function getTicker(ticker) {
            return $http.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`).then(response => response.data);
        }

        return {
            getTicker
        };
    }
})();


//register an account
//Save stock to a list
//View portfolio of your stocks changes
